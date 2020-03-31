import React, { useState } from 'react'

const AddTodo = ({ onCreate }) => {
  const [value, setValue] = useState('')
  const submitHandler = e => {
    e.preventDefault()

    if (value.trim()) {
      onCreate(value)
      setValue('')
    }
  }

  return (
    <form onSubmit={submitHandler} className='form'>
      <input
        className='form_input'
        value={value}
        onChange={event => setValue(event.target.value)}
        type='text'
      />
      <button className='form_btn' type='submit'>
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo
