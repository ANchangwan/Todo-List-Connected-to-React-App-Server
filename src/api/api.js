import axios from "axios";

const API_SERVER_HOST = 'http://localhost:8080';
const prefix = `${API_SERVER_HOST}/api`;


export async function sendTodos(todos){
  const res = await axios.post(`${prefix}/todos`,{todos});
  console.log("res.data:sendTodos", res.data);
  return res.data;
}

export async function getTodo(){
  const res = await axios.get(`${prefix}/todos`)
  console.log("res.data:todo-get", res.data);
  return res.data;
}