import React from 'react';
import './Homepage.scss';
import { Link } from 'react-router-dom';
import millify from 'millify';

import { Grid } from '@material-ui/core';

import { NewsCard, CoinCard } from '../../components';
import { fetchTopTenCoins } from '../../api/CoinMethods';
import { useQuery } from 'react-query';

const Homepage = () => {
  const retrieveCoins = async () => {
    const data = await fetchTopTenCoins().then((res) => res.data);
    return data;
  };

  const { data, isLoading, isError } = useQuery('topcoins', retrieveCoins);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error...</div>;
  return (
    <div className="homepage">
      <div className="container-fluid">
        {data.stats && (
          <div className="total-crypto-stats">
            <div className="total-crypto-stats-stat">
              <p>
                Coins: <span>{data.stats.total}</span>
              </p>
            </div>
            <div className="total-crypto-stats-stat">
              <p>
                Exchanges: <span>{data.stats.totalExchanges}</span>
              </p>
            </div>
            <div className="total-crypto-stats-stat">
              <p>
                Market Cap: <span>${millify(data.stats.totalMarketCap)}</span>
              </p>
            </div>
            <div className="total-crypto-stats-stat">
              <p>
                24h Volume: <span>${millify(data.stats.total24hVolume)}</span>
              </p>
            </div>
          </div>
        )}
        {data.coins && (
          <div className="crypto-list section-padding section">
            <div className="latest-crypto-heading">
              <h1>Top 10 Crypto</h1>
              <Link to="/coins">
                <h3 className="see-more-btn">See More</h3>
              </Link>
            </div>
            <Grid container spacing={2}>
              {data.coins.map((coin) => (
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
