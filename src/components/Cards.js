import React from 'react'
import CardItems from './CardItems';
import './Cards.css'
import img from '../dataused/img.jpg'
import img2 from '../dataused/img2.jpg'
import img3 from '../dataused/img3.jpg'
import img4 from '../dataused/img4.jpg'
import img5 from '../dataused/img5.jpg'

function Cards() {
    return(
        <div className='cards'>
            <h1>Check out these wonderfull destinations!</h1>
            <div className='cards-container'>
                <div className='cards-wrapper'>
                    <ul className='cards-items'>
                        <CardItems
                        src={img}
                        text='Explore the hidden waterfall deep inside the amaznon jungles'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItems
                        src={img2}
                        text='Explore the hidden waterfall deep inside the amaznon jungles'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItems
                        src={img3}
                        text='Explore the hidden waterfall deep inside the amaznon jungles'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItems
                        src={img4}
                        text='Explore the hidden waterfall deep inside the amaznon jungles'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItems
                        src={img5}
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