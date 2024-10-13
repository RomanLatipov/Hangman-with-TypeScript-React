export default function HangmanWord() {
    const word = 'test';
    const guessedLetter = ['t', 'e', 'g'];
    // return <div className="word"></div>
    return <div className="word">
        {word.split("").map((letter, index) => (
            <span style={{borderBottom: "10px solid black"}} key={index}>
                <span style={{visibility: guessedLetter.includes(letter) ? "visible" : "hidden"}}>
                    {letter}
                </span>
            </span>
        ))}
    </div>
}