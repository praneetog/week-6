import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <UpdateHeader></UpdateHeader>
      <Header title="Header1"></Header>
      <Header title="Header2"></Header>
      <Header title="Header3"></Header>
      <Header title="Header4"></Header>
    </>
  )
}

function UpdateHeader(){
  const [header, setHeader] = useState("My name is Kashyap")
  function changeHeader(){
    setHeader("My name is Praneet")
  }

  return <div>
    <button onClick={changeHeader}>Update Header</button>
    <Header title={header}></Header>
  </div>
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
