import axios from 'axios';

const API = axios.create({
    baseURL:process.env.REACT_APP_API_URL,
});

export const registerUser=(data)=>API.post('/register',data);

export const loginUser=(data)=>API.post("/login",data);

export default API;