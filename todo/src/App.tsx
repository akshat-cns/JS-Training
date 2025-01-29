import { useState } from 'react'
import './App.css'
import { Todoitem } from './components/Todoitem';
import { TodoitemType } from './types';

function App() {
  const [todos,setTodos] = useState<TodoitemType[]>([]);
  const [input,setInput] = useState('');

  const addTodo = (text:string) => {
    const newTodo: TodoitemType = {
      id: Date.now(),
      content: text,
      isDone: false,
    };
    setTodos([...todos, newTodo] );
  };

  const ToggleTodo = (id:number) => {
    const newTodos = todos.map(todo => {
      if(todo.id===id)
        return {...todo, isDone:!todo.isDone}
      else
        return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id:number)=>{
    const newTodos=todos.filter(todo=>todo.id!==id);
    setTodos(newTodos);
  }

  return(
    <div>
      <h1> Todo List</h1>
      <input type="text" value={input} onChange={e => setInput(e.target.value)} className="bg-blue-500 text-white p-2"/>
      <button onClick={()=> addTodo(input)} className="bg-blue-500 text-white p-2">Add item</button>
      <ul>
        {todos.map(todo => (
          <Todoitem key={todo.id} todo={todo} toggleTodo={ToggleTodo} deleteTodo={deleteTodo}/>
        ))}
      </ul>
    </div>
  )
}

export default App;