import React, { useState } from 'react'

export default function TodoInput(props) {

const {handleAddTodos,todoValue, setTodoValue} = props



  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value)
        }}
        placeholder='Enter task' />

      <button
       onClick={() => {
        if (todoValue==''){
            alert('Input is empty!')
            return
        }
        handleAddTodos(todoValue)
        setTodoValue('')
       }}>Add</button>
    </header>
  )
}
