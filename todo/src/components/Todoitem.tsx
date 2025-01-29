import { FC } from 'react';
import { TodoitemType } from '../types';

type Props = {
  todo: TodoitemType;
  toggleTodo: (id:number) => void;
  deleteTodo: (id: number) => void;
}

export const Todoitem: FC<Props> = (props) => {
  return (
    <li onClick={()=> props.toggleTodo(props.todo.id)} className={props.todo.isDone ? 'line-through' : ''}>
      {props.todo.content}
      <button onClick={(e) => {e.stopPropagation(); props.deleteTodo(props.todo.id);}} className="ml-2 text-red-500 hover:text-red-700">
        Delete
      </button>
    </li>
  )
}

