import axios from "axios";

const API_SERVER_HOST = 'http://localhost:8080';
const prefix = `${API_SERVER_HOST}/api`;
export async function sendTodos(todos){
 const res = await axios.post(`${prefix}/todo`,{todos});
console.log("res.data", res.data);
 return res.data;
}