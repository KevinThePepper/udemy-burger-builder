import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-bdb7d.firebaseio.com/'
});

export default instance;