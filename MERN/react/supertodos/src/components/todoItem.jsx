
const TodoItem = ({ task, onToggleTask, onDeleteTask }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggleTask}
        />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
        </span>
      </label>
      <button onClick={onDeleteTask}>Delete</button>
    </li>
  )
}

export default TodoItem