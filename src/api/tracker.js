import axios from 'axios';
import {AsyncStorage} from 'react-native';

const instance = axios.create({
    baseURL:'http://dd350510507f.ngrok.io'
});


// first function inside in interceptors is for make request and 
// second one is when we get an error withour making request
instance.interceptors.request.use(
   async (config) =>{
       const token = await AsyncStorage.getItem('token');
       if(token){
           config.headers.Authorization = `Bearer ${token}`;
       }
       return config;
   },
    (err) => Promise.reject(err)
);

export default instance;
