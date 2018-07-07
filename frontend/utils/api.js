import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 30000,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

const getAllJobs  = async ()  => await instance.get('posts');
