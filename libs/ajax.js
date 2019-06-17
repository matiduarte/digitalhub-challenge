import axios from 'axios';

const APIURL = 'https://newsapi.org/v2';
const APIKEY = '5f4baeec6a344125b802d0ef72054584';

export default function request(method, path, data = {}) {
  const headers = {
    'Content-type': 'text/plain;charset=UTF-8',
    'X-Api-Key': APIKEY,
  };
  return axios({
    method,
    headers,
    url: `${APIURL}/${path}`,
    data,
  });
}
