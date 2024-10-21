import './App.css'
import { useCallback, useEffect, useState } from 'react'
import words from "./list.json"
import HangmanDrawing from './HangmanDrawing';
import Letters from './Letters';
import HangmanWord from './HangmanWord';

function App() {
  const [word, setWord] = useState(words[Math.floor(Math.random() * words.length)]);
  console.log(word)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetter: string[] = guessedLetters.filter(letter => !word.includes(letter));

  const isLoser = incorrectLetter.length >= 6;
  const isWinner = word.split("").every(letter => guessedLetters.includes(letter));

  console.log(isWinner)

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter)) return;
    
    setGuessedLetters(currentLetters => [...currentLetters, letter])
  },[guessedLetters])

  useEffect(() => {
    const handleTpying = (event: KeyboardEvent) => {
      if (isWinner || isLoser) return;
      const key = event.key;
      if (!key.match(/^[a-z]$/)) return;

      event.preventDefault();
      addGuessedLetter(key)
    }

    window.addEventListener("keypress", handleTpying)

    return () => window.removeEventListener("keypress", handleTpying)
  }, [guessedLetters])

  return (<>
    <div className='mainDisplay'>
      <h1 style={{fontSize: "50px"}}>{isWinner ? "You Win" : isLoser ? "You Lose" : ""}</h1>
      <HangmanDrawing numberOfGuesses={incorrectLetter.length}/>
      <HangmanWord word={word} guessedLetters={guessedLetters}/>
      <Letters activeLetters={guessedLetters.filter(letter => word.includes(letter))} inactiveLetters={incorrectLetter} addGuessedLetter={addGuessedLetter}/>
    </div>
    
  </>)
}

export default App
