import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://206.189.196.178:5000/',
  timeout: 30000,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
});

const getAllJobs = async () => await instance.get('jobs');
const getPendingJobs = async user_id => await instance.get(`jobs/pending/${user_id}`);

export default {
  getAllJobs,
  getPendingJobs
};
