import { useState, useEffect } from 'react'
import {Peer}  from "peerjs";
import './App.css';
import Form from './components/form/Form';

function App() {
  const [peerId, setPeerId] = useState('')
  const [playerData, setPlayerData] = useState({
    hero: "",
  })

  const [gameState, setGameState] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayerData((prevPlayerData) => ({ ...prevPlayerData, [name]: value }))
  }


  // should this be in the component? 
  const handleSubmit = (e) => {
    e.preventDefault();
    setGameState((prevGameState) => [...prevGameState, playerData])
    console.log(gameState)
  }

  useEffect(() => {
    console.log(gameState)
  }, [gameState])


  return (
    <>
      <h1>hello world</h1>
      <Form playerData={playerData} handleChange={handleChange} handleSubmit={handleSubmit} />
      <h2>players</h2>
    </>
  )
}

export default App
