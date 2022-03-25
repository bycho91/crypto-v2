import React, { useState, useEffect } from 'react';
import './CoinsPage.scss';
import { CoinCard, AppPagination } from '../../components';
import { Grid, Button } from '@material-ui/core';
import { useQuery } from 'react-query';
import { fetchAllCoins } from '../../api/CoinMethods';

const CoinsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCoins, setFilteredCoins] = useState(null);

  const retrieveCoins = async () => {
    const data = await fetchAllCoins();
    return data.data.coins;
  };

  const { data, isLoading, isError } = useQuery('coins', retrieveCoins);

  const changeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const getFilteredCoins = () => {
    const filteredData = data?.filter((coin) =>
      coin.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredCoins(filteredData);
  };

  useEffect(() => {}, [filteredCoins]);
  useEffect(() => {}, [searchTerm]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  return (
    <div className="coins-page section-padding">
      <div className="search-bar">
        <input
          type="text"
          className="search-bar-input"
          placeholder="search for a coin"
          value={searchTerm}
          onChange={(e) => changeSearchTerm(e)}
        />
        <Button variant="outlined" onClick={getFilteredCoins}>
          Search
        </Button>
      </div>
      {filteredCoins !== null ? (
        <Grid container spacing={2}>
          {filteredCoins.map((coin) => (
            <Grid item xs={12} md={6} lg={4} key={coin.uuid}>
              <CoinCard coin={coin} />
            </Grid>
          ))}
        </Grid>
      ) : (
        data && (
          <Grid container spacing={3}>
            {data.map((coin) => (
              <Grid item xs={12} md={6} lg={4} key={coin.uuid}>
                <CoinCard coin={coin} />
              </Grid>
            ))}
          </Grid>
        )
      )}
    </div>
  );
};

export default CoinsPage;
