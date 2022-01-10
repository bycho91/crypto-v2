import React, { useState, useEffect } from "react";
import "./Homepage.scss";
import { Link } from "react-router-dom";
import millify from "millify";

import sourceImg from "../../static/headshot.png";

import { NewsCard } from "../../components";

import { useGetCryptoNewsQuery } from "../../services/getNewsApi";
import { useGetCryptosQuery } from "../../services/getCryptoApi";

const statsData = {
  coins: "12311",
  exchanges: 552,
  marketCap: "2.1T",
  volume: "89M",
};

const Homepage = () => {
  const [globalStats, setGlobalStats] = useState({});

  const { data: news, isFetching } = useGetCryptoNewsQuery({
    newsCategory: "bitcoin",
    count: 4,
  });

  const { data: cryptos, isLoading } = useGetCryptosQuery(10);

  useEffect(() => {
    setGlobalStats(cryptos?.data?.stats);
  }, []);

  console.log(cryptos?.data?.stats);

  if (isFetching) return "Loading...";
  return (
    <div className="homepage">
      <div className="total-crypto-stats">
        <div className="total-crypto-stats-stat">
          <p>
            Coins: <span>{globalStats.total}</span>
          </p>
        </div>
        <div className="total-crypto-stats-stat">
          <p>
            Exchanges: <span>{globalStats.totalExchanges}</span>
          </p>
        </div>
        <div className="total-crypto-stats-stat">
          <p>
            Market Cap: <span>${millify(globalStats.totalMarketCap)}</span>
          </p>
        </div>
        <div className="total-crypto-stats-stat">
          <p>
            24h Volume: <span>${millify(globalStats.total24hVolume)}</span>
          </p>
        </div>
      </div>

      <div className="latest-news section-padding section">
        <div className="latest-news-heading">
          <h1>Latest News</h1>
          <Link to="/news">
            <h3 className="see-more-btn">See More</h3>
          </Link>
        </div>
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
