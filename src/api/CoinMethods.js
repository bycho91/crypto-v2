import axios from 'axios';

export const fetchTopTenCoins = async () => {
  try {
    const data = await axios
      .request({
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins',
        params: {
          referenceCurrencyUuid: 'yhjMzLPhuIDl',
          timePeriod: '24h',
          tiers: '1',
          orderBy: 'marketCap',
          orderDirection: 'desc',
          limit: '10',
          offset: '0',
        },
        headers: {
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.REACT_APP_CRYPTO_API_KEY,
        },
      })
      .then((res) => res.data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchAllCoins = async () => {
  try {
    const data = await axios
      .request({
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins',
        params: {
          referenceCurrencyUuid: 'yhjMzLPhuIDl',
          timePeriod: '24h',
          tiers: '1',
          orderBy: 'marketCap',
          orderDirection: 'desc',
          limit: '50',
          offset: '0',
        },
        headers: {
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.REACT_APP_CRYPTO_API_KEY,
        },
      })
      .then((res) => res.data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchCoinById = async (id) => {
  try {
    const data = await axios
      .request({
        method: 'GET',
        url: `https://coinranking1.p.rapidapi.com/coin/${id}`,
        params: { referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '24h' },
        headers: {
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.REACT_APP_CRYPTO_API_KEY,
        },
      })
      .then((res) => res.data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
