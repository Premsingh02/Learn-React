import { useState } from 'react'
import './App.css'
import Tile from './Tile';

function App() {
  return (
    <>
      <div>
        <h1>Welcome to react</h1>
        <span>How r u doing ?</span>
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </div>
    </>
  )
}

export default App;