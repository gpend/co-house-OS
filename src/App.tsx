import { useState } from 'react'
import './App.scss';
import Header from './components/Header/Header'
import Home from "./components/home/home";
import { Container } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container className='app container-xxl'>
      < Header />
      < Home />
    </Container>
  )
}

export default App
