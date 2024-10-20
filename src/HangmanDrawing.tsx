import './App.css'

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export default function HangmanDrawing({numberOfGuesses}: HangmanDrawingProps) {

    const parts = [<div className='head'></div>,
                    <div className='body'></div>,
                    <div className='rightArm'></div>,
                    <div className='leftArm'></div>,
                    <div className='rightLeg'></div>,
                    <div className='leftLeg'></div>];
    return(<>
        <div style={{ position: "relative" }}>
            <div className='bar1'></div>
            {parts.slice(0, numberOfGuesses)}
            <div className='bar2'></div>
            <div className='bar3'></div>
            <div className='bar4'></div>
        </div>
    
    </>)
}