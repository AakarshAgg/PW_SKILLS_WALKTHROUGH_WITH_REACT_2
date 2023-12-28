
import { useState } from 'react'
import './App.css'
import Logo from './components/Logos'
import LoginForm from './components/Login'
import SignUp from './components/SignUp'

function App() {
  
  const [display,setDisplay]=useState(true)

  return (
    <div className='flex justify-center '>
      <form className='border-2 border-black w-96 rounded-xl bg-white m-12 flex flex-col justify-center py-2 px-8'>
      <Logo/>
      {
        display?<LoginForm disply={display} setDisplay={setDisplay}/>:<SignUp disply={display} setDisplay={setDisplay}/>
      }
      </form>
       
    </div>
  )
}




export default App
