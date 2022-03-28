import React from 'react';
import { useParams } from 'react-router-dom';
import './CoinDetailsPage.scss';
import { useQuery } from 'react-query';
import { fetchCoinById } from '../../api/CoinMethods';
import { fetchAllNews } from '../../api/NewsMethod';
import parse from 'html-react-parser';
import { Grid } from '@material-ui/core';
import { NewsCard } from '../../components';

const CoinDetailsPage = () => {
  const { id, name } = useParams();

  const retrieveCoinInfo = async () => {
    const data = await fetchCoinById(id).then((res) => res.data.coin);
    return data;
  };
  const retrieveNews = async () => {
    const data = await fetchAllNews(name, 12);
    return data;
  };

  const {
    data: coin,
    isLoading,
    isError,
  } = useQuery(['coin'], retrieveCoinInfo);
  const {
    data: news,
    isLoading: newsLoading,
    isError: newsError,
  } = useQuery('news', retrieveNews);

  if (newsLoading) return <div>Loading News...</div>;
  if (isLoading) return <div>Loading Coin...</div>;
  if (newsError) return <div>News Error...</div>;
  if (isError) return <div>Coin Error...</div>;

  return (
    <div className="container">
      <div className="top-container">
        <div className="main-info-container">
          <div className="main-info-container--top">
            <img src={coin.iconUrl} alt={coin.name} className="icon-img" />
            <div className="name">{coin.name}</div>
            <div className="symbol">{coin.symbol}</div>
          </div>
          <div className="main-info-container--mid">
            <div className="badge">{`Rank #${coin.rank}`}</div>
            <div className="badge">{`ATH $${parseFloat(
              coin.allTimeHigh?.price
            ).toFixed(2)}`}</div>
          </div>
          <div className="main-info-container--bottom"></div>
        </div>
        <div className="stats-info-container"></div>
      </div>

      <div className="bottom-container">
        <h3>Description:</h3>
        <span>{parse(`${coin.description}`)}</span>
      </div>
      <div className="news-container">
        {news && (
          <>
            <h1 style={{ marginBottom: '1em' }}>Latest {coin.name} News</h1>
            <Grid container spacing={2}>
              {news.map((article) => (
                <Grid item xs={12} md={6} lg={4} key={article.title}>
                  <NewsCard article={article} />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </div>
    </div>
  );
};

export default CoinDetailsPage;
