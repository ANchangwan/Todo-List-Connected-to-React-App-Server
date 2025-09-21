import { create } from 'zustand';
import {sendTodos} from "../api/api.js";

export const useTodoStore = create((set,get) =>{
    return {
        todos:[],
        addTodo: async (content) =>{
            try {
                const newTodo = await sendTodos(content);
                set((state) =>({
                    todos:[newTodo, ...state.todos]
                }))
            }catch(error){
                console.log(error);
            }
        }
    }
})