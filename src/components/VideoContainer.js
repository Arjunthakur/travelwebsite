import React from 'react'
import Button from './Button'
import './VideoContainer.css';

function VideoContainer() {
    return(
        <div className='videoContainer'>
            <video src='/video/video7.mp4' autoPlay loop muted />
            <div className='videoC'>
                <h1>ADVENTURE IS WAITING</h1>
                <p>What are you waiting for?</p>
                <div className='videoContainer-btns'>
                    <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>
                        TRAVEL WITH US
                    </Button>
                    <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>
                        CONTACT US
                    </Button>
            </div>
            
            </div>
        </div>
    )
}

export default VideoContainer
