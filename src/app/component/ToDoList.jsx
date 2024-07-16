import React, {useState } from 'react';

export function ToDoList ({ }) {

const [todos,setTodos]=useState([]);
const [task,setTask]=useState("");

const addTask = () => {
    if (task.trim() !=='') {
        setTodos([...todos, task]);
        setTask('');
    }
};

const handleChangeTask = (ev) => {
    setTask(ev.target.value);
};

const handleEnterKey = (ev) => {
    if(ev.key === "Enter") {
        addTask();
    }
};
const handleDelete = (index) => {
    const newTodos = todos.filter((todos,id) => id !== index);
    setTodos(newTodos);
};

return (
<div className="w-3/4 flex flex-col items-center border-2 rounded-lg border-black">
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