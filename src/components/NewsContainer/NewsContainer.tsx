import React, { useState } from "react";
import ThreeLine from "/src/assets/line.svg";
import StrelaR from "/src/assets/strelkaRight.svg";
import StrelaL from "/src/assets/strelkaleft.svg";
import { news } from "../../utils/data/news.json";
import { News } from "../../utils/types/newstype";
import { NewsCard } from "./components/NewsCard";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "../../utils/hooks/useMediaQuery";
import styles from './NewsContainer.module.css'; // assuming you have a CSS module

export const NewsContainer = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery('(max-width: 1080px)');
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < news.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(news.length - 1);
    }
  };

  return (
    <>
      <div className={styles.vibe}>
        <h2 className={styles.news}>Новости </h2>
        <img className={styles.line} src={ThreeLine} alt="line" />
      </div>
      <div className={styles.threeImg}>
        <img
          className={styles.imgL}
          src={StrelaL}
          alt="left arrow"
          onClick={matches ? handlePrev : undefined}
        />
        {matches ? (
          <NewsCard
            key={news[currentIndex].id}
            photo={news[currentIndex].photo}
            text={news[currentIndex].shortenedText}
            title={news[currentIndex].title}
            onClick={() => navigate(`/news/${news[currentIndex].id}`)}
          />
        ) : (
          news.slice(0, 3).map((item: News) => (
            <NewsCard
              key={item.id}
              photo={item.photo}
              text={item.shortenedText}
              title={item.title}
              onClick={() => navigate(`/news/${item.id}`)}
            />
          ))
        )}
        <img
          className={styles.imgR}
          src={StrelaR}
          alt="right arrow"
          onClick={matches ? handleNext : undefined}
        />
      </div>
    </>
  );
};