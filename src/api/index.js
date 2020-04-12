import axios from 'axios';

export const SERVER_BASE_HOST = location.protocol + '//' + location.hostname + ':' + process.env.SERVER_PORT;

export const API_BASE_HOST = '/api';

// base url to be used acrossed the axios api call
axios.defaults.baseURL = `${SERVER_BASE_HOST}${API_BASE_HOST}`;

// headers
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

// Add a response interceptor, for success, just return the data coming from server,
// while we handle any non_errors
axios.interceptors.response.use((response) => {
  if(typeof response.data === 'string') {
    try { response = JSON.parse(response.data); } catch (e) {};
    return response.data;
  }
  const { data } = response.data;
  return data;
}, (error) => {
  let message = 'Server Error';
  
  // iterate the error response coming from the server and concanate all its
  // errors into one message string
  if(error.response && error.response.data) {
    if(typeof error.response.data === 'string') {
      message = error.response.data;
    } else if(Array.isArray(error.response.data)) {
      error.response.data.map((v) => {
        if(typeof v === 'string') {
          message += (v + ' ');
        } else if(typeof v === 'object') {
          message += (Object.values(v).join(' ') + ' ');
        }
      });
      message = message.replace(/\.+/g, '.').replace(/\s+/g, ' ').trim();
    } else if(typeof error.response.data === 'object') {
      message = (Object.values(error.response.data).join(' ') + ' ');
    }
  } else if(error && error.message) {
    message = error.message;
  }

  // Do something with response error
  return Promise.reject(message);
});
