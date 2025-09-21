import {useState} from "react";
import {sendTodos} from "../api/api.js";

export default function InputTodo(){
    const [todo, setTodo] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const inputTodo = (e) =>{
        setTodo(e.target.value);
    }
    const submitTodo = (e) =>{
        e.preventDefault();
        setIsLoading(true);
        sendTodos(todo)
            .then(data =>{
                console.log("data",data);
                setTodo("");
                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() =>{
                // window.location.reload();
                setIsLoading(false);
        })
    }

    if(isLoading){
        return <div>...loading</div>
    }

    return (
        <form
            className="relative w-full max-w-lg"
            action="/api/todo"
            method="post"
        >
            <input
                className="w-full border-none border-gray-800 rounded-3xl bg-neutral-300
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
               placeholder-black placeholder:opacity-20 focus:text-black p-3
               "   // 버튼 공간 확보
                type="text"
                name="todo"
                value={todo}
                onChange={inputTodo}
                placeholder="todos 입력해주세요!"
            />
            <button
                onClick={submitTodo}
                className="bg-orange-500 rounded-3xl text-white absolute
               right-0 top-1/2 -translate-y-1/2 px-6 py-3"
                type="submit"
            >
                Add
            </button>
        </form>

    );
}