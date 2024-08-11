/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  // eslint-disable-next-line react/prop-types
  const {todos} = props

  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} todo={todo} index = {todoIndex} />
        )

      })}
    </ul>
  )
}
