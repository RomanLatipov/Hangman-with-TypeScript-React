import './App.css'
import { useState } from 'react'
import words from "./list.json"
import HangmanDrawing from './HangmanDrawing';
import Letters from './Letters';

function App() {
  const [word, setWord] = useState(words[Math.floor(Math.random() * words.length)]);
  // console.log(word)
  const [guessLetters, setGuessedLetters] = useState<string[]>([]);
  return (<>
    <div className='mainDisplay'>
      <HangmanDrawing />
      <Letters />
    </div>
    
  </>)
}

export default App
