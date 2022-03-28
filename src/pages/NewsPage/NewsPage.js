import React from 'react';
import './NewsPage.scss';
import { NewsCard } from '../../components';
import { Grid } from '@material-ui/core';
import { useQuery } from 'react-query';
import { fetchAllNews } from '../../api/NewsMethod';

const NewsPage = () => {
  const retrieveNews = async () => {
    const data = await fetchAllNews('crypto', 12);
    return data;
  };

  const { data, isFetching, isLoading, isError } = useQuery(
    'articles',
    retrieveNews
  );

  if (isFetching) return <div>Fetching...</div>;
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div className="news-page section-padding">
      <h1 style={{ marginBottom: '1em' }}>Latest Crypto News</h1>
      {data && (
        <Grid container spacing={2}>
          {data.map((article) => (
            <Grid item xs={12} md={6} lg={4} key={article.title}>
              <NewsCard article={article} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default NewsPage;
