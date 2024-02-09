import axios from "axios";

export default axios.create({
  //baseURL: "http://localhost:8082/api/books",
  //baseURL: "http://127.0.0.1:8082/api/books",  
  //baseURL: "http://172.26.80.1:8082/api/books", // ip do host windows dentro da wsl 
  //baseURL: "http://0.0.0.0:8082/api/books",  
  baseURL: "http://172.26.91.28:8082/api/books", // ip do host wsl2
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});