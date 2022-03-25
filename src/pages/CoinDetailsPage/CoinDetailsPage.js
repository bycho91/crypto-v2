import React from 'react';
import { useParams } from 'react-router-dom';
import './CoinDetailsPage.scss';
import { useQuery } from 'react-query';
import { fetchCoinById } from '../../api/CoinMethods';
import parse from 'html-react-parser';

const CoinDetailsPage = () => {
  const { id } = useParams();

  const retrieveCoinInfo = async () => {
    const data = await fetchCoinById(id).then((res) => res.data.coin);
    return data;
  };

  const { data, isLoading, isError } = useQuery(['coin'], retrieveCoinInfo);

  console.log(data);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error...</div>;

  return (
    <div className="container">
      <div className="top-container">
        <div className="main-info-container">
          <div className="main-info-container--top">
            <img src={data.iconUrl} alt={data.name} className="icon-img" />
            <div className="name">{data.name}</div>
            <div className="symbol">{data.symbol}</div>
          </div>
          <div className="main-info-container--mid">
            <div className="badge">{`Rank #${data.rank}`}</div>
            <div className="badge">{`ATH $${parseFloat(
              data.allTimeHigh?.price
            ).toFixed(2)}`}</div>
          </div>
          <div className="main-info-container--bottom"></div>
        </div>
        <div className="stats-info-container"></div>
      </div>

      <div className="bottom-container">
        <h3>Description:</h3>
        <p>{parse(`${data.description}`)}</p>
      </div>
    </div>
  );
};

export default CoinDetailsPage;
