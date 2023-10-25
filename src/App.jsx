
import { CssBaseline } from '@mui/material'
import './App.css'
import Todolist from './components/Todolist'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <CssBaseline/>
    <Navbar/>
    
    <Todolist/>
    
    </>
  )
}

export default App
