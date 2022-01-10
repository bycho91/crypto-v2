import React from "react";
import "./Homepage.scss";

import sourceImg from "../../static/headshot.png";

import { NewsCard } from "../../components";

import { useGetCryptoNewsQuery } from "../../services/getNewsApi";

const statsData = {
  coins: "12311",
  exchanges: 552,
  marketCap: "2.1T",
  volume: "89M",
};

const Homepage = () => {
  const { data: news, isFetching } = useGetCryptoNewsQuery({
    newsCategory: "bitcoin",
    count: 4,
  });

  news?.value?.map((article) => console.log(article));
  if (isFetching) return "Loading...";
  return (
    <div className="homepage">
      <div className="total-crypto-stats">
        <div className="total-crypto-stats-stat">
          <p>
            Coins: <span>{statsData.coins}</span>
          </p>
        </div>
        <div className="total-crypto-stats-stat">
          <p>
            Exchanges: <span>{statsData.exchanges}</span>
          </p>
        </div>
        <div className="total-crypto-stats-stat">
          <p>
            Market Cap: <span>${statsData.marketCap}</span>
          </p>
        </div>
        <div className="total-crypto-stats-stat">
          <p>
            24h Volume: <span>${statsData.volume}</span>
          </p>
        </div>
      </div>

      <div className="latest-news section-padding section">
        <h1>Latest News</h1>
        <div className="latest-news-articles">
          {news?.value?.map((article) => (
            <NewsCard article={article} />
          ))}
        </div>
      </div>

      <div className="crypto-list section"></div>
    </div>
  );
};

export default Homepage;
