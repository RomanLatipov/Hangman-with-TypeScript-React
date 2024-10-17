export default function Letters() {
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    return <div className="keyboard">{letters.map((letter, index) => {return <button key={index} className="btn ">{letter}</button>})}</div>
}