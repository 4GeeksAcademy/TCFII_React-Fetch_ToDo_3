"use client";

import React, {useState, useEffect } from 'react';
import { getTodos } from '../services/getTodos';
import { createTodo } from '../services/createTodo';
import { deleteTodo } from '../services/deleteTodo';


export function ToDoList ({ user }) {
const [todos,setTodos]=useState([]);
const [task,setTask]=useState("");

const loadData = async () => {
    const data = await getTodos(user);
    setTodos(data);
  };

  useEffect(() => {
    loadData();
  }, []);

const addTask = () => {
    if (task.trim() !=='') {
        setTodos([...todos, task]);
        setTask('');
    }
};

const handleChangeTask = (ev) => {
    setTask(ev.target.value);
};

const handleEnterKey = async (ev) => {
    if(ev.key === "Enter") {
        const newTodo = await createTodo(user, task.trim());
        addTask();
    }
};
const handleDelete = async (index) => {
    const todo = todo[index];
    await deleteTodo(todo.id)
    const newTodos = todos.filter((todos,id) => id !== index);
    setTodos(newTodos);
};

return (
<div className="w-3/4 flex flex-col items-center border-2 rounded-lg bg-white border-black text-black">
    <h1 className="text-xl mt-4 mb-4">To Do List</h1>
    <div>
        <input  className="w-full border-2 rounded-lg border-black mb-4" 
                placeholder="Enter new task!" 
                value={task}
                onChange={handleChangeTask}
                onKeyDown={handleEnterKey}
        />
    </div>
    <div className="w-1/2 border-2 rounded-lg border-gray mb-4">
        <ul>
            {todos.map((todos,index) => (
                <li className="flex justify-between mr-2" key={index}>{todos}
                <button class="ml-auto text-[10px] text-white hover:text-red-500 rounded"
                    onClick={() => handleDelete (index)}>
                    X
                </button>
                </li>
            ))}
        </ul>
    </div>
    <div className="w-1/2 border-2 rounded-lg border-transparent mb-4">
       <p>To do items left:&nbsp;{todos.length}</p>
    </div>


</div>
  );
}