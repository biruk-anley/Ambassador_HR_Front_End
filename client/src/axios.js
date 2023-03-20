import axios from "axios";

const getToken = () => {
    const tokenString = localStorage.getItem('jwt');
    console.log(tokenString)
    if (tokenString) {
        return tokenString
    } else {
        return ''
    }
};

const instance = axios.create(
    {
        baseURL: "http://localhost:5000/",
        withCredentials: false,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "*",
            'x-access-token': getToken()
        }
    })

export default instance;