import './App.css'
import { useState } from 'react'
import words from "./list.json"
import HangmanDrawing from './HangmanDrawing';
import Letters from './Letters';
import HangmanWord from './HangmanWord';

function App() {
  const [word, setWord] = useState(words[Math.floor(Math.random() * words.length)]);
  console.log(word)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetter: string[] = guessedLetters.filter(letter => !word.includes(letter))

  return (<>
    <div className='mainDisplay'>
      <HangmanDrawing numberOfGuesses={incorrectLetter.length}/>
      <HangmanWord word ={word} guessedLetters={guessedLetters}/>
      <Letters />
    </div>
    
  </>)
}

export default App
