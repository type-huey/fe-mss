import axios, { AxiosRequestConfig } from 'axios';

export const request = (config: AxiosRequestConfig) => {
  return new Promise((resolve, reject) => {
    axios({
      baseURL: import.meta.env.VITE_API_BASE_URL,
      withCredentials: false,
      headers: {
        'Content-Type': 'application/json'
      },
      ...config
    })
      .then(response => {
        if (
          response.status === 200 ||
          response.status === 201 ||
          response.status === 204
        )
          resolve(response.data.data);
        else reject(response);
      })
      .catch(error => {
        console.error(error.response);
        reject(error.response);
      });
  });
};
