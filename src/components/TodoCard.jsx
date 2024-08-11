import React from 'react'

export default function TodoCard(props) {
  const {todo, handleDeleteTodo, index, handleEditTodo} = props


  return (
    <li className='todoItem'>
      <p>{todo}</p>
      <div className='actionsContainer'>
        <button onClick={() => {
          handleEditTodo(index)
        }}>
         <i className="fa-solid fa-pen-to-square"></i>
        </button>

        <button
        onClick={() => {
          handleDeleteTodo(index)
          console.log(index);
        }}
        >
        <i className="fa-solid fa-trash-can"></i>
        </button>
     
      </div>


    </li >
  )
}
