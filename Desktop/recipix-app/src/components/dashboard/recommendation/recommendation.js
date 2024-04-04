import React from 'react';

import { Link } from 'react-router-dom';

import RecommendationList from './recommendationlist';
import './recommendation.css'


const Recommendation = () => {
    const cardsData = [
      { title: 'Card 1', content: 'This is the content for card 1.' },
      { title: 'Card 2', content: 'This is the content for card 2.' },
      { title: 'Card 3', content: 'This is the content for card 3.' },
      { title: 'Card 4', content: 'This is the content for card 4.' },
      { title: 'Card 5', content: 'This is the content for card 5.' },
    ];
  
    return (
      <div className='container'>
        <div className='ingredient_container'>
            <p style={{color:'white'}}>item1</p>
            
        </div>
        <div className='card_container'>
        {cardsData.map((data, index) => (
            // <Link to='/detailrecipe'>
                <RecommendationList key={index} title={data.title} content={data.content} />
        //   </Link>
        ))}
        </div>
      </div>
    );
  };
  
  export default Recommendation;
  