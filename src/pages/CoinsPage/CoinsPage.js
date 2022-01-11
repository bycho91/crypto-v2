import React, { useState, useEffect } from "react";
import "./CoinsPage.scss";
import { CoinCard, AppPagination } from "../../components";
import { useGetCryptosQuery } from "../../services/getCryptoApi";
import { Grid, Button } from "@material-ui/core";

const CoinsPage = () => {
  const [coins, setCoins] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCoins, setFilteredCoins] = useState(null);
  const { data: coinList, isFetching } = useGetCryptosQuery(100);

  const changeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };

  const getFilteredCoins = () => {
    const filteredData = coins?.filter((coin) =>
      coin.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredCoins(filteredData);
  };

  useEffect(() => {
    setCoins(coinList?.data?.coins);
  }, []);

  useEffect(() => {}, [filteredCoins]);

  useEffect(() => {}, [searchTerm]);
  if (isFetching) return "Loading...";
  return (
    <div className="coins-page section-padding">
      <div className="search-bar">
        <input
          type="text"
          className="search-bar-input"
          placeholder="search crypto"
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
            <Grid xs={12} md={6} lg={4}>
              <CoinCard coin={coin} />
            </Grid>
          ))}
        </Grid>
      ) : (
        coins && (
          <Grid container spacing={2}>
            {coins.map((coin) => (
              <Grid xs={12} md={6} lg={4}>
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
