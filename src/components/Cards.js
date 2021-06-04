import React from 'react'
import CardItems from './CardItems';
import './Cards.css'

function Cards() {
    return(
        <div className='cards'>
            <h1>Check out these wonderfull destinations!</h1>
            <div className='cards-container'>
                <div className='cards-wrapper'>
                    <ul className='cards-items'>
                        <CardItems
                        src='video/img.jpg'
                        text='Explore the hidden waterfall deep inside the amaznon jungles'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItems
                        src='video/img5.jpg'
                        text='Explore the hidden waterfall deep inside the amaznon jungles'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItems
                        src='video/img2.jpg'
                        text='Explore the hidden waterfall deep inside the amaznon jungles'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItems
                        src='video/img3.jpg'
                        text='Explore the hidden waterfall deep inside the amaznon jungles'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItems
                        src='video/img4.jpg'
                        text='Explore the hidden waterfall deep inside the amaznon jungles'
                        label='Adventure'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards;