import axios from 'axios';

const APIURL = 'https://newsapi.org/v2';
const APIKEY = 'f8fccfc8319342388d75975eb132b28a';

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
