import axios from 'react-native-axios';

const clientAxios = axios.create({
    baseURL: 'https://api.github.com/'
});

export default clientAxios;