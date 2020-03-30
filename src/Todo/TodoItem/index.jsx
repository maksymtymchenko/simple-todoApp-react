import React, { useContext } from 'react'
import Context from '../context'

const TodoItem = ({ todo, index, onChange }) => {
  const { removeTodo } = useContext(Context)
  const classes = []

  if (todo.completed) {
    classes.push('done')
  }
  return (
    <li>
      <span className={classes.join(' ')}>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button onClick={() => removeTodo(todo.id)}>&times;</button>
    </li>
  )
}

export default TodoItem
