import axios from 'axios'
// import myJsonFile from './public/db/salon.json'
export default axios.create({
  baseURL: 'http://localhost:3000',
  // baseURL: '@/public/db/salon.json',
  timeout: 3000
})
// const config = JSON.parse(myJsonFile);
