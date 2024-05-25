import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async(res) => {
        const json = await res.json()
        setTodos(json.todos)
      })
    }, 5000)
  },[])

  return (
    <div>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
  )
}

function Todo({title, description}){
  return <>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </>
}

export default App
