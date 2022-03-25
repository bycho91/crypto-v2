import React, { useEffect, useState } from 'react';
import './NewsPage.scss';
import { useGetCryptoNewsQuery } from '../../services/getNewsApi';
import { NewsCard } from '../../components';
import { Grid } from '@material-ui/core';

const NewsPage = () => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const [articles, setArticles] = useState(null);
  const { data: news, isFetching } = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count: 12,
  });

  useEffect(() => {
    setArticles(news?.value);
  }, []);

  if (isFetching) return 'Loading...';
  return (
    <div className="news-page section-padding">
      {articles && (
        <Grid container spacing={2}>
          {articles.map((article) => (
            <Grid item xs={12} md={6} lg={4}>
              <NewsCard article={article} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default NewsPage;
