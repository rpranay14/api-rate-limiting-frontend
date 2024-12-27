import axios from 'axios';

export const axiosapi=axios.create({
    baseURL:"https://server.pranay.tech"
})
export const axiosPrivate=axios.create({
    baseURL:"https://server.pranay.tech",
    withCredentials:true,
    headers:{"Content-Type":"application/json"}
})