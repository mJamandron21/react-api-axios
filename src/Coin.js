import React from 'react';
import './Coin.css';

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange24,
  priceChange1,
  priceChange7
  
}) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>${price}</p>

          {priceChange1 < 0 ? (
            <p className='coin-percent red'>{priceChange1.toFixed(2)}%</p>
            ) : (
              <p className='coin-percent green'>{priceChange1.toFixed(2)}%</p>
              )}
          {priceChange24 < 0 ? (
            <p className='coin-percent red'>{priceChange24.toFixed(2)}%</p>
            ) : (
              <p className='coin-percent green'>{priceChange24.toFixed(2)}%</p>
              )}
          {priceChange7 < 0 ? (
            <p className='coin-percent red'>{priceChange7.toFixed(2)}%</p>
            ) : (
              <p className='coin-percent green'>{priceChange7.toFixed(2)}%</p>
            )}

              <p className='coin-volume'>${volume.toLocaleString()}</p>
          <p className='coin-marketcap'>
            ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;