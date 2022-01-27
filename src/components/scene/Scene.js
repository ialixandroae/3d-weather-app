import React, { useEffect, useRef, useContext, useState } from 'react';
import { loadModules } from 'esri-loader';
import { getWeather, getEsriWeather } from '../../helpers/helpers';
import { store } from '../../store/store';

export const WebSceneView = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const sceneRef = useRef();
  const [sceneView, setView] = useState(null);

  const _searchArea = globalState.state.searchArea;
  const _baseURL = globalState.state.baseURL;
  const _apiKey = globalState.state.apiKey;

  useEffect(() => {
    // lazy load the required ArcGIS API for JavaScript modules and CSS
    async function loadWebScene() {
      const [WebScene, SceneView, Search] = await loadModules(
        ['esri/WebScene', 'esri/views/SceneView', 'esri/widgets/Search'],
        {
          css: true,
        }
      );
      const scene = new WebScene({
        portalItem: {
          // autocasts as new PortalItem()
          id: '3595a9c3957f4178b3c2215d23563702',
        },
      });

      const weather = await getWeather(_baseURL, {
        lat: _searchArea.lat,
        long: _searchArea.long,
        apiKey: _apiKey,
      });

      const esriWeather = getEsriWeather(weather?.weather[0]?.id);
      // load the map view at the ref's DOM node
      const view = new SceneView({
        container: sceneRef.current,
        map: scene,
        qualityProfile: 'high',
        environment: {
          starsEnabled: true,
          atmosphereEnabled: true,
          lighting: {
            directShadowsEnabled: true,
            date: 'Mon Apr 06 2022 17:19:18 GMT+0200 (Central European Summer Time)',
          },
          atmosphere: {
            quality: 'high',
          },
          weather: esriWeather,
        },
      });

      setView(view);

      const searchWidget = new Search({
        view: view,
      });

      // Add the search widget to the top right corner of the view
      view.ui.add(searchWidget, {
        position: 'top-right',
      });

      searchWidget.on('select-result', (data) => {
        const resultLat = data?.result?.feature?.geometry?.latitude;
        const resultLong = data?.result?.feature?.geometry?.longitude;
        let resultName = data?.result?.name;

        dispatch({
          type: 'SET_SEARCH_AREA',
          data: {
            lat: resultLat,
            long: resultLong,
            name: resultName,
          },
        });

        view.goTo({
          center: [resultLong, resultLat],
          tilt: 85,
          zoom: 15,
        });
      });

      return () => {
        if (view) {
          // destroy the map view
          view.container = null;
        }
      };
    }
    loadWebScene();
  }, []);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const weather = await getWeather(_baseURL, {
          lat: _searchArea.lat,
          long: _searchArea.long,
          apiKey: _apiKey,
        });
        dispatch({ type: 'SET_DATA', data: [weather] });
      } catch (e) {
        console.log(e);
      }
    }
    fetchWeather();
  }, [globalState.state.searchArea]);

  useEffect(() => {
    if (globalState.state.data.length > 0) {
      const weather = getEsriWeather(globalState.state.data[0].weather[0].id);

      dispatch({
        type: 'SET_WEATHER',
        data: weather,
      });

      if (sceneView?.environment) {
        sceneView.environment.weather = weather;
      }
    }
  }, [globalState.state.data]);

  return <div style={{ height: '100%', width: '100%' }} ref={sceneRef} />;
};
