import React from 'react';
import { Slide } from 'react-slideshow-image';
import './Slide.css';
import Card from './Card/Card';


const settings = {
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

const Slideshow = () => {
    return (
        <div className="containerSlide">
            <Slide {...settings}>
                <div className="slide1">
                    <div className="first-card">
                        <Card
                        title='Colocation 4 pers.'
                        imageUrl='https://pbs.twimg.com/profile_images/3647943215/d7f12830b3c17a5a9e4afcc370e3a37e_400x400.jpeg'
                        name='Matt LeBlanc'
                        body='Revenue mensuel par moyen'
                        moneyCandidats='1000$'
                        moneyGarants='500$'
                        />
                    </div>
                    <div className="second-card">
                        <Card
                        title='Colocation 4 pers.'
                        imageUrl='https://pbs.twimg.com/profile_images/3647943215/d7f12830b3c17a5a9e4afcc370e3a37e_400x400.jpeg'
                        name='Matt LeBlanc'
                        body='Revenue mensuel par moyen'
                        moneyCandidats='1000$'
                        moneyGarants='500$'
                        />
                    </div>
                    <div className="third-card">
                        <Card
                        title='Colocation 4 pers.'
                        imageUrl='https://pbs.twimg.com/profile_images/3647943215/d7f12830b3c17a5a9e4afcc370e3a37e_400x400.jpeg'
                        name='Matt LeBlanc'
                        body='Revenue mensuel par moyen'
                        moneyCandidats='1000$'
                        moneyGarants='500$'
                        />
                    </div>
                </div>
                <div className="slide2">
                    <div className="first-card">
                        <Card
                        title='Colocation 4 pers.'
                        imageUrl='https://pbs.twimg.com/profile_images/3647943215/d7f12830b3c17a5a9e4afcc370e3a37e_400x400.jpeg'
                        name='Matt LeBlanc'
                        body='Revenue mensuel par moyen'
                        moneyCandidats='1000$'
                        moneyGarants='500$'
                        />
                    </div>
                    <div className="second-card">
                        <Card
                        title='Colocation 4 pers.'
                        imageUrl='https://pbs.twimg.com/profile_images/3647943215/d7f12830b3c17a5a9e4afcc370e3a37e_400x400.jpeg'
                        name='Matt LeBlanc'
                        body='Revenue mensuel par moyen'
                        moneyCandidats='1000$'
                        moneyGarants='500$'
                        />
                    </div>
                    <div className="third-card">
                        <Card
                        title='Colocation 4 pers.'
                        imageUrl='https://pbs.twimg.com/profile_images/3647943215/d7f12830b3c17a5a9e4afcc370e3a37e_400x400.jpeg'
                        name='Matt LeBlanc'
                        body='Revenue mensuel par moyen'
                        moneyCandidats='1000$'
                        moneyGarants='500$'
                        />
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;