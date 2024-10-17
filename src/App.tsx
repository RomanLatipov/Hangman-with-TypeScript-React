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

  const incorrectLetter: string[] = guessedLetters.filter(letter => !word.includes(letter))

  const addLetters = useCallback((letter: string) => {
      if (guessedLetters.includes(letter)) {
        console.log("yes")
        return;
      }

      setGuessedLetters(currentLetters => [...currentLetters, letter])
    }, [guessedLetters])

  useEffect(() => {
    function handleTpying(event: KeyboardEvent) {
      const key = event.key;

      if (!key.match(/^[a-z]{1}$/)) return;
      event.preventDefault();

      addLetters(key)
    }
    
    window.addEventListener("keypress", handleTpying);

    return () => window.removeEventListener('keydown', handleTpying);
  }, [guessedLetters])

  return (<>
    <div className='mainDisplay'>
      <HangmanDrawing numberOfGuesses={incorrectLetter.length}/>
      <HangmanWord word ={word} guessedLetters={guessedLetters}/>
      <Letters />
    </div>
    
  </>)
}

export default App
