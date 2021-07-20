import axios from 'axios';
import store from './store';
import { closeOperation, openOperation } from './store/actions';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    store.dispatch(openOperation());

    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    store.dispatch(closeOperation());

    
    return response;
  }, function (error) {
    store.dispatch(closeOperation());
    // Do something with response error
    return Promise.reject(error);
  });

export default axios;