type LettersProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
}

export default function Letters({activeLetters, inactiveLetters, addGuessedLetter} : LettersProps) {
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    return <div className="keyboard">{letters.map((letter, index) => {
        const isActive = activeLetters.includes(letter);
        const isInactive = inactiveLetters.includes(letter);
        return <button onClick={() => addGuessedLetter(letter)} key={index} className={`btn ${isActive ? "active" : ""} ${isInactive ? "inactive" : ""}`}>{letter}</button>})
    }</div>
}