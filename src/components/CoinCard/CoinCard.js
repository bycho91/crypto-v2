import React from 'react';
import './CoinCard.scss';
import { Link } from 'react-router-dom';

import millify from 'millify';

const CoinCard = ({ coin }) => {
  return (
    <Link to={`/coins/${coin.uuid}/${coin.name}`}>
      <div className="coin-card">
        <div className="coin-card-header">
          <div className="coin-card-header-info">
            <img src={coin.iconUrl} alt={coin.name} />
            <h2>{coin.name}</h2>
            <p>{coin.symbol}</p>
          </div>
          <p>Rank: {coin.rank}</p>
        </div>

        <div className="coin-card-details">
          <h1>${parseFloat(coin.price).toFixed(2)}</h1>
          <div className="market-cap">
            Market Cap: ${millify(coin.marketCap)}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default CoinCard;
