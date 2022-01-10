import React from "react";
import "./CoinCard.scss";

const CoinCard = ({ coin }) => {
  return (
    <div>
      <h1>{coin.name}</h1>
    </div>
  );
};
export default CoinCard;
