import { useState } from "react";
import TodoItem from "./todoItem";


const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Add a new task
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask.trim(), completed: false }]);
      setNewTask('');
    }
  };

  // Delete a task
  const onDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Toggle task completion
  const onToggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
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
          <TodoItem
            key={index}
            task={task}
            onToggleTask={() => onToggleTask(index)}
            onDeleteTask={() => onDeleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
