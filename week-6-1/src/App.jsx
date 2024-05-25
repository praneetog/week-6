import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to Gym",
      description: "Go to Gym from 5-7"
    },{
      id: 2,
      title: "Go Study",
      description: "Study cause you ain't employed"
    },{
      id: 3,
      title: "Go play sports",
      description: "Play sports cause you fat as f..."
    }
  ])

  function addTodo(){
    const newTodo = []
    for(let i=0; i<todos.length; i++){
      newTodo.push(todos[i])
    }
    newTodo.push({
      id: 4,
      title: "Go play games",
      description: "Relax your mind and play some games"
    })

    setTodos(newTodo)
  }

  return (
    <>
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map(todo => <Todo title={todo.title} description={todo.description} />)}
    </>
  )
}

function Todo({title, description}){
  return <div>
    <h1>
      {title}
    </h1>
    <h4>
      {description}
    </h4>
  </div>
}

export default App
