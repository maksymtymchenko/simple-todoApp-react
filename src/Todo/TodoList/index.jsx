import React from 'react'
import TodoItem from '../TodoItem'

const TodoList = props => {
  return (
    <ul className='lists'>
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={index}
            onChange={props.onToggle}
          />
        )
      })}
    </ul>
  )
}

export default TodoList
