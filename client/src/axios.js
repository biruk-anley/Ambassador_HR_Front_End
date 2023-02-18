import axios from "axios";

<<<<<<< HEAD
=======
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
>>>>>>> a8c92c83de8dc089c93308bda574ef47ab40167b


const instance = axios.create(
    {
        baseURL: "",
            withCredentials: false,
            headers: {
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
          }
      })

      
export default instance;