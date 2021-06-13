import React from 'react'
import './Card.css'

function Card({title, imageUrl, name, body, moneyCandidats, moneyGarants}) {
    return (
        <div className='card-container'>
            <div className='card-title'>
                <h3>{title}</h3>
            </div>
            <div className='card-content'>
                <div className='image-container'>
                    <img src={imageUrl} alt='' />
                    <div className='text-container'>
                        <text>{name}</text>
                    </div>
                </div>
                <div className='image-container'>
                    <img src={imageUrl} alt='' />
                    <div className='text-container'>
                        <text>{name}</text>
                    </div>
                </div>
                <div className='card-body'>
                    <h4>{body}</h4>
                </div>
                <div className='section'>
                    <div className='candidats'>
                        <text>Candidats</text>
                        <br/>
                            <div className='money'>
                                <text>{moneyCandidats}</text>
                            </div>
                        <br/>
                    </div>
                    <div className='garants'>
                        <text>Garants</text>
                        <br/>
                            <div className='money'>
                                {moneyGarants}
                            </div>
                        <br/>
                    </div>
                </div>
            </div>
            <div className='btn'>
                <button>
                    <text>Voir plus</text>
                </button>
            </div>
        </div>
    )
}

export default Card