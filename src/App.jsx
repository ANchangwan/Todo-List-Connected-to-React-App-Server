import InputTodo from "./components/Input.jsx";


function App() {


  return (
      <div className="flex justify-center py-4 h-full">
          <div className="
           flex flex-col justify-start items-center gap-1.5
          box-border rounded-2xl p-10 size-2/6 max-w-screen-sm h-[95vh] bg-[#FFECC0] shadow-2xl">
              <h1 className="font-bold text-3xl">ToDo List✍️</h1>
              <InputTodo/>
          </div>
      </div>
  )
}

export default App
