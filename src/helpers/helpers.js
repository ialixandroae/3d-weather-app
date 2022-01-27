import moment from 'moment';

const getWeather = async (baseURL, payload) => {
  const data = await fetch(
    `${baseURL}?lat=${payload.lat}&lon=${payload.long}&units=metric&mode=json`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-key': payload.apiKey,
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      },
    }
  );
  return data.json();
};

const getToday = () => {
  return new Date().toLocaleString('en-us', { weekday: 'long' });
};

const getDate = () => {
  const date = new Date();
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

const getTimeFromTimestamp = (timestamp, timezone) => {
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  var sunriseUTC = timestamp;
  var utcDate = moment.utc(moment.unix(sunriseUTC));
  var timezoneDate = moment(utcDate).add(timezone, 'seconds');
  return moment(timezoneDate).format('HH:mm:ss');
};

const getEsriWeather = (weatherCode) => {
  switch (weatherCode) {
    case 200:
      return {
        type: 'rainy',
        cloudCover: 0.1, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 201:
      return {
        type: 'rainy',
        cloudCover: 0.5, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 202:
      return {
        type: 'rainy',
        cloudCover: 0.9, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 210:
      return {
        type: 'rainy',
        cloudCover: 0.2, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 211:
      return {
        type: 'rainy',
        cloudCover: 0.6, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 212:
      return {
        type: 'rainy',
        cloudCover: 0.9, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 230:
      return {
        type: 'rainy',
        cloudCover: 0.3, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 231:
      return {
        type: 'rainy',
        cloudCover: 0.7, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 232:
      return {
        type: 'rainy',
        cloudCover: 0.9, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 300:
      return {
        type: 'rainy',
        cloudCover: 0.5, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 301:
      return {
        type: 'rainy',
        cloudCover: 0.5, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 302:
      return {
        type: 'rainy',
        cloudCover: 0.9, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 310:
      return {
        type: 'rainy',
        cloudCover: 0.2, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 311:
      return {
        type: 'rainy',
        cloudCover: 0.4, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 312:
      return {
        type: 'rainy',
        cloudCover: 0.9, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 313:
      return {
        type: 'rainy',
        cloudCover: 0.7, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 314:
      return {
        type: 'rainy',
        cloudCover: 0.9, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 321:
      return {
        type: 'rainy',
        cloudCover: 0.5, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 500:
      return {
        type: 'rainy',
        cloudCover: 0.1, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 501:
      return {
        type: 'rainy',
        cloudCover: 0.2, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 502:
      return {
        type: 'rainy',
        cloudCover: 0.9, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 503:
      return {
        type: 'rainy',
        cloudCover: 0.9, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 504:
      return {
        type: 'rainy',
        cloudCover: 0.9, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 511:
      return {
        type: 'rainy',
        cloudCover: 0.8, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 520:
      return {
        type: 'rainy',
        cloudCover: 0.2, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 521:
      return {
        type: 'rainy',
        cloudCover: 0.4, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 522:
      return {
        type: 'rainy',
        cloudCover: 0.9, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 531:
      return {
        type: 'rainy',
        cloudCover: 0.7, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 600:
      return {
        type: 'foggy',
        cloudCover: 0.2, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 601:
      return {
        type: 'foggy',
        cloudCover: 0.5, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 602:
      return {
        type: 'foggy',
        cloudCover: 0.8, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 611:
      return {
        type: 'foggy',
        cloudCover: 0.3, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 612:
      return {
        type: 'foggy',
        cloudCover: 0.2, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 613:
      return {
        type: 'foggy',
        cloudCover: 0.2, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 615:
      return {
        type: 'foggy',
        cloudCover: 0.1, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 616:
      return {
        type: 'foggy',
        cloudCover: 0.2, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 620:
      return {
        type: 'foggy',
        cloudCover: 0.2, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 621:
      return {
        type: 'foggy',
        cloudCover: 0.4, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 622:
      return {
        type: 'foggy',
        cloudCover: 0.7, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 701:
    case 711:
    case 721:
    case 731:
    case 741:
    case 751:
    case 761:
    case 762:
    case 771:
    case 781:
      return {
        type: 'foggy',
        cloudCover: 0.8, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 800:
      return {
        type: 'sunny',
        cloudCover: 0.0, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 801:
      return {
        type: 'sunny',
        cloudCover: 0.3, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 802:
      return {
        type: 'cloudy',
        cloudCover: 0.4, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 803:
      return {
        type: 'cloudy',
        cloudCover: 0.7, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    case 804:
      return {
        type: 'cloudy',
        cloudCover: 0.9, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
    default:
      return {
        type: 'sunny',
        cloudCover: 0.5, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
      };
  }
};

export { getWeather, getToday, getDate, getTimeFromTimestamp, getEsriWeather };
