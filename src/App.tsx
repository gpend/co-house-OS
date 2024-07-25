import { useState } from 'react'
import './App.scss';
import Header from './components/Header/Header'
import { Container } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container className='app'>
      < Header />
    </Container>
  )
}

export default App
