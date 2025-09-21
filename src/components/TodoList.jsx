import {useEffect, useState} from "react";
import {getTodo} from "../api/api.js";

export default function TodoList(){
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);



    useEffect(()=>{
        setIsLoading(true);
        getTodo()
            .then((data) =>{
            console.log("getTodo: ", ...data);
            setTodos([...data]);
            todos.sort().reverse();
        })
            .catch(error =>{
                console.log(error);
                alert("네트워크 에러");
            })
            .finally(() =>{
                setIsLoading(false);
            })
    },[]);

    if(isLoading){
        return <div>...Loading</div>
    }

    return (
        <div className="w-full p-2">
            {todos.map((todo) =>(
                <div
                    className="my-2 flex justify-between px-4"
                    key={todo.id}>
                    <div className="flex justify-center items-center">
                        <input
                            id="todoList"
                            name="todoCheck"
                            type="checkbox"
                            className="  mr-2 appearance-none w-5 h-5 border-2 border-orange-500 rounded-full
                                         checked:bg-orange-500 checked:border-transparent
                                         checked:after:content-['✓'] checked:after:block checked:after:text-white
                                         checked:after:font-bold checked:after:text-center checked:after:leading-5"
                        />
                        <label htmlFor="todoList">{todo.content}</label>

                    </div>
                    <button className="bg-orange-500 px-2 rounded-sm text-white cursor-pointer">X</button>
                </div>
            ))}
        </div>
    )
}