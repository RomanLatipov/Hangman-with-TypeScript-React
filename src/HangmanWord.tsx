type HangmanProps = {
    word: string
    guessedLetters: string[]
}

export default function HangmanWord({word, guessedLetters}: HangmanProps) {
    // return <div className="word"></div>
    return <div className="word">
        {word.split("").map((letter, index) => (
            <span style={{borderBottom: "10px solid black"}} key={index}>
                <span style={{visibility: guessedLetters.includes(letter) ? "visible" : "hidden"}}>
                    {letter}
                </span>
            </span>
        ))}
    </div>
}