import axios from 'axios'

const myAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

export default myAxios