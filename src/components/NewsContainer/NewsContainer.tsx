import styles from "./NewsContainer.module.css";
import ThreeLine from "/src/assets/line.svg";
import MainCar from "/src/assets/car1.svg";
import StrelaR from "/src/assets/strelkaRight.svg";
import StrelaL from "/src/assets/strelkaleft.svg";
import { news } from "../../utils/data/news.json";
import { News } from "../../utils/types/newstype";
import { NewsCard } from "./components/NewsCard";
import { useNavigate } from "react-router-dom";

export const NewsContainer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.vibe}>
        <h2 className={styles.news}>Новости </h2>
        <img className={styles.line} src={ThreeLine} />
      </div>
      <div className={styles.threeImg}>
        <img className={styles.imgL} src={StrelaL} />
        {news.map((item: News) => (
          <NewsCard
            key={item.id}
            photo={item.photo}
            text={item.shortenedText}
            title={item.title}
            onClick={() => navigate(`/news/${item.id}`)}
          />
        ))}

        <img className={styles.imgR} src={StrelaR} />
      </div>
    </>
  );
};
