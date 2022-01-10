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

const NewsCard = ({ article }) => {
  return (
    <div className="news-card">
      <Card style={{ height: "100%" }}>
        <CardMedia
          height="140"
          image={article?.image?.thumbnail?.contentUrl || demoImage}
          component="img"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            style={{ fontWeight: "700" }}
            component="div"
          >
            {article.name.length > 80
              ? `${article.name.substring(0, 80)}...`
              : article.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {article.description.length > 100
              ? `${article.description.substring(0, 100)}`
              : article.description}
          </Typography>
          <Typography variant="body3" style={{ fontWeight: "700" }}>
            {moment(article.datePublished).startOf("ss").fromNow()}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsCard;
