import axios from "axios";

const instance = axios.create(
    {
            baseURL: "http://localhost:5000/",
            withCredentials: false,
            headers: {
                "Access-Control-Allow-Origin": "*",
                
                "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE, OPTIONS",
                
                "Access-Control-Allow-Headers": "*"
                
                
          }
      })




      
export default instance;