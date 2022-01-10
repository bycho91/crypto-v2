import React from "react";
import "./CoinCard.scss";

import millify from "millify";

const CoinCard = ({ coin }) => {
  return (
    <div className="coin-card">
      <div className="coin-card-header">
        <div className="coin-card-header-info">
          <img src={coin.iconUrl} alt={coin.name} />
          <h2>{coin.name}</h2>
          <p>{coin.symbol}</p>
        </div>
        <p>Rank: {coin.rank}</p>
      </div>

      <div className="coin-card-price">
        <h1>${parseFloat(coin.price).toFixed(2)}</h1>
        <div className="market-cap">Market Cap: ${millify(coin.marketCap)}</div>
        <div className="rank">Rank: </div>
      </div>
    </div>
  );
};
export default CoinCard;
