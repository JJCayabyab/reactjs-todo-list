import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useState, useEffect } from "react"


function App() {
  
  const [todos, setTodos] = useState([])
  const [todoValue,setTodoValue] = useState('')


  function persistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos:newList}))
  }

  //add new todo task
  function handleAddTodos(newTodo){
    const newTodoList=[...todos,newTodo]// add new todo to the current todo list
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  useEffect(()=>{
    // if local storage does not exist
    if(!localStorage){
      return
    }

    let localTodos=localStorage.getItem('todos')

    //if localTodos does not exist, return undefined
    if (!localTodos){
      return
    }

    localTodos=JSON.parse(localTodos).todos
    setTodos(localTodos)
  },[])

  function handleEditTodo(index){
    const valueToEdit = todos[index]
    setTodoValue(valueToEdit)
    handleDeleteTodo(index)

  }
  return (
    <>
      <TodoInput todoValue={todoValue} handleEditTodo={handleEditTodo} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} todos={todos}/>
    </>
  )
}

export default App
