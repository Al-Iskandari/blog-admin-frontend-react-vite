import axios from 'axios';

const getCookie = (key) => {
  const name = "ayuna";
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + "=([^;]*)"
  ));

  if(!matches){
    return null;
  }

  const dataCookie = "{"+decodeURIComponent(matches[1]).split("{")[2].replace("}","");
  const cookies = JSON.parse(dataCookie);
 
  return cookies[key] ? cookies[key] : null;
};


const apiClient = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    Authorization: `Bearer ${getCookie('accesstoken')}`
  },
});

apiClient.interceptors.response.use(
  (response) => {
    // If the response is successful (status code 2xx), return the response data
    return response;
  
  },
  (error) => {
    // Handle errors globally
    if (error.response) {
      // Server responded with a status code out of 2xx range
      const errorMessage = error.response || 'An error occurred';
      return errorMessage;
        
    } else if (error.request) {
      // No response received (network error, timeout, etc.)
      return 'Network error - check your internet connection';

    } else {
      // Something else happened during the request
      return `Request error:${error.message}`;
    }

  }
);

const _ApiHandler = async (options) =>{
  try {
    if(options.url.includes(undefined)){
      return {data: {status:400, message:''}};
    }
    const res = await apiClient(options)
        .then(response => {
          return response;
        })
        .catch(error => {
          return `Request error:${JSON.stringify(error)}`;
        });

        return res;
  } catch (error) {
    return JSON.stringify(error);
  }
        

}

export { _ApiHandler, getCookie };