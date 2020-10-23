import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.102:3333',
});

/*
  https://stackoverflow.com/questions/51026532/json-server-cannot-access-via-local-ip
  Rodar a fake api: yarn json-server -H 192.168.0.102 -p 3333 -w server.json
*/

export default api;
