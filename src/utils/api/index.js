const axios = require('axios');
const commonAxios = axios.create({
  baseURL: 'https://simple-contact-crud.herokuapp.com/',
});
function sleep(delay, value) {
  return new Promise(function(resolve) {
    setTimeout(resolve, delay, value);
  });
}

commonAxios.interceptors.response.use(
  function(response) {
    const {data} = response;
    if (data === 0) {
      const error = new Error(data.message || 'Unknow error.');
      throw error;
    }
    console.log('#ApiUtils data.data ', data.data);
    return sleep(1000, data.data);
  },
  function(error) {
    console.log('#ApiUtils', error);
    return Promise.reject(error);
  },
);

export {commonAxios};
