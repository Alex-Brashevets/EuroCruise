import { useParams } from "react-router-dom";
import { news } from "../../utils/data/news.json";
import { useEffect, useState } from "react";
import { News } from "../../utils/types/newstype";
import styles from "./NewsArticlePage.module.css";

const NewsArticlePage = () => {
  const params = useParams();
  const [article, setArticle] = useState<News | null>(null);

  useEffect(() => {
    if (params) {
      setArticle(news[Number(params.id) - 1]);
    }
  }, []);

  return (
    <div className={styles.page}>
      <h1>{article?.title}</h1>
      <div className={styles.content}>
        <img src={article?.photo} alt="" />
        <p className={styles.articleText}>{article?.article}</p>
      </div>
    </div>
  );
};
export default NewsArticlePage;
