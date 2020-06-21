import React from 'react';

const Card = ({ news }) => {
    return (
        <div className='card'>
            <img src={news.urlToImage} width = '300' />
        <div className='card-body'>
            <h2>{`Source: ${news.source.name}`}</h2>
            <p>{`Description: ${news.description}`}</p>
        </div>
        {/* <ul className='list-group list-group-flush'>
          <li className='list-group-item'>{`Distributor: ${movie.distributor}`}</li>
          <li className='list-group-item'>{`Amount: ${movie.amount}`}</li>
        </ul> */}
      </div>
    );
};




export default Card;
