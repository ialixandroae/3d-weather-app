// store.js
import React, { createContext, useReducer } from 'react';

const initialState = {
  data: [],
  searchArea: {
    lat: '48.13',
    long: '11.57',
    name: 'Munich',
  },
  weather: {
    type: 'sunny',
    cloudCover: 0.5, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
  },
  modal: false,
  baseURL: 'https://community-open-weather-map.p.rapidapi.com/weather',
  apiKey: '3af5bcce6bmsha951405d9ae93adp1c1f27jsndf942220638c',
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return { ...state, data: action.data };
      case 'SET_SEARCH_AREA':
        return { ...state, searchArea: action.data };
      case 'SET_MODAL':
        return { ...state, modal: action.data };
      case 'SET_WEATHER':
        return { ...state, weather: action.data };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
