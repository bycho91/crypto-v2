import axios from 'axios';

export const fetchAllNews = async (searchTerm, count) => {
  try {
    const data = await axios
      .request({
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news/search',
        params: {
          q: searchTerm,
          freshness: 'Day',
          textFormat: 'Raw',
          safeSearch: 'Off',
          count: count,
        },
        headers: {
          'X-BingApis-SDK': 'true',
          'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
          'X-RapidAPI-Key':
            'c89ebf3faemshc4bdeeb9e28dc23p1eb486jsn3afabe9e2c91',
        },
      })
      .then((res) => res.data.value);
    return data;
  } catch (error) {
    console.error(error);
  }
};
