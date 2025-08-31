import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from "./components/Body"
import Header from './components/Header'

function App() {
 

  return (

    <div>
      <h1 className="bg-amber-50 text-center p-5">hi</h1>
      <Header/>
      <Body/>

    </div>
   
  )
}

export default App
