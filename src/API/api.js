/**
 * API Docs:
 * - https://openweathermap.org/guide
 * - https://openweathermap.org/current
 */
import * as axios from 'axios';

const apiKey = "07de1574ddeb3c9a6716740d61b286e5";
const axiosBase = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

const weatherAPI = {
  getWeather(cityName) {
    return axiosBase.get(`weather?q=${cityName}&appid=${apiKey}&units=metric`)
      .then(response => response.data)
      .catch((error) => {
        console.log(error.response.data);
      });
  },
};

export default weatherAPI;
