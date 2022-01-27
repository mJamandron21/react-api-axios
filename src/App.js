import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Coin from './components/Coin';
import { getCoinList } from './utils/getCoinList'


function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');  

useEffect(async () => {
  const data = await getCoinList()
  try{
    setCoins(data)
    console.log(data)
  }catch(error){
    console.log(error)
  }
}, [search])

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='coin-app'>
      <div className='coin-search'>
     <h1 className='coin-text'><span><img src='./src/coingecko-icon.png' className='coin-icon' alt=''/></span>Coin<span className='coin-text-span'>Gecko</span>-API</h1>
        <form>
          <input
            className='coin-input'
            type='text'
            title='searchField'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
      </div>
      <div className='heading'>
        <div className='coin-name-header'>
          <p>Name</p>
          <p>Symbol</p>
        </div>
        <div className='coin-data-header'>
          <p>Price</p>
          <p>1h</p>
          <p>24h</p>
          <p>7d</p>
          <p>24h Volume</p>
          <p>Market Cap</p>
        </div>
      </div>

      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            volume={coin.total_volume}
            marketcap={coin.market_cap}
            image={coin.image}
            priceChange1={coin.price_change_percentage_1h_in_currency}
            priceChange24={coin.price_change_percentage_24h}
            priceChange7={coin.price_change_percentage_7d_in_currency}
          />
        );
      })}
    </div>
  );
}

export default App;