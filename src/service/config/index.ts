import axios  from 'axios';
import type { AxiosInstance } from 'axios';
import { getDataFromCookie } from '@token-service';

const request : AxiosInstance = axios.create({
     baseURL: "http://store.go-clothes.uz:5555/v1"
    //   timeout: 48000,
})

request.interceptors.request.use((config)=>{
    const token = getDataFromCookie("token")
    if(token){
        config.headers["Authorization"] = `${token}`
    }
    return config
})
export default request