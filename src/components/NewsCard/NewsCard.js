import React from "react";
import "./NewsCard.scss";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import moment from "moment";

const demoImage =
  "https://blog.coindcx.com/wp-content/uploads/2021/11/Crypto-news.png";

const NewsCard = ({
  article: { name, description, datePublished, image, provider },
}) => {
  return (
    <a href={provider.url} target="_blank" rel="noreferrer">
      <div className="news-card">
        <div className="news-card-header">
          <h3>{name.length > 80 ? name.substring(0, 80) : name}</h3>
          <img src={image?.thumbnail.contentUrl} alt={name} height="100px" />
        </div>

        <div className="news-card-description">
          {description.length > 150
            ? description.substring(0, 150)
            : description}
        </div>

        <div className="news-card-info">
          <div className="news-card-info-source">{provider[0].name}</div>
          <div className="time">
            {moment(datePublished).startOf("ss").fromNow()}
          </div>
        </div>
      </div>
    </a>
  );
};

export default NewsCard;
