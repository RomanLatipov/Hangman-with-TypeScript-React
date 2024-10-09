import './App.css'

export default function HangmanDrawing() {
    return(<>
        <div style={{ position: "relative" }}>
            <div className='bar1'></div>
            <div className='head'></div>
            <div className='body'></div>
            <div className='rightArm'></div>
            <div className='leftArm'></div>
            <div className='rightLeg'></div>
            <div className='leftLeg'></div>
            <div className='bar2'></div>
            <div className='bar3'></div>
            <div className='bar4'></div>
        </div>
    
    </>)
}