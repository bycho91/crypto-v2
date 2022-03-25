import React from 'react';
import './Homepage.scss';
import { Link } from 'react-router-dom';
import millify from 'millify';

import { Grid } from '@material-ui/core';

import { NewsCard, CoinCard } from '../../components';
import { fetchAllCoins } from '../../api/CoinMethods';
import { useQuery } from 'react-query';

const Homepage = () => {
  const retrieveCoins = async () => {
    const data = await fetchAllCoins().then((res) => res.data);
    return data;
  };

  const {
    data: { stats, coins },
    isLoading,
    isError,
  } = useQuery('topcoins', retrieveCoins);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error...</div>;
  return (
    <div className="homepage">
      <div className="container-fluid">
        {stats && (
          <div className="total-crypto-stats">
            <div className="total-crypto-stats-stat">
              <p>
                Coins: <span>{stats.total}</span>
              </p>
            </div>
            <div className="total-crypto-stats-stat">
              <p>
                Exchanges: <span>{stats.totalExchanges}</span>
              </p>
            </div>
            <div className="total-crypto-stats-stat">
              <p>
                Market Cap: <span>${millify(stats.totalMarketCap)}</span>
              </p>
            </div>
            <div className="total-crypto-stats-stat">
              <p>
                24h Volume: <span>${millify(stats.total24hVolume)}</span>
              </p>
            </div>
          </div>
        )}
        {coins && (
          <div className="crypto-list section-padding section">
            <div className="latest-crypto-heading">
              <h1>Top 10 Crypto</h1>
              <Link to="/coins">
                <h3 className="see-more-btn">See More</h3>
              </Link>
            </div>
            <Grid container spacing={2}>
              {coins.map((coin) => (
                <Grid item xs={12} lg={6} key={coin.uuid}>
                  <Link to={`/coins/${coin.uuid}`}>
                    <CoinCard coin={coin} className="cc" />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
