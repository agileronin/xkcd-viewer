import axios from 'axios';

export default axios.create({
  baseURL: 'https://xkcd-proxy-api.herokuapp.com',  
  headers: {
      "Content-type": "application/json; charset=UTF-8"
  }
});
