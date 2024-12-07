import  { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]); 
  const [newTask, setNewTask] = useState(''); 

  // Add a new task
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask.trim(), completed: false }]); 
    }
  };

// toggle the tsk
  const onToggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const onDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Todo List</h2>


      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>


      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleTask(index)}
              />
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </span>
            </label>
            <button onClick={() => onDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
