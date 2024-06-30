import {useNavigate} from "react-router-dom"
import image404 from '/src/assets/404image.svg'
import styles from './NotFoundPage.module.css'


const NotFoundPage = (): JSX.Element => {
  const navigate = useNavigate();
  return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.image_container}>
            <img src={image404} alt="Not found"/>
          </div>
          <div className={styles.text}>
            COMING SOON...
          </div>
          <button color='#EF4824' onClick={()=>navigate('/')}>
            Вернуться на главную
          </button>
        </div>


      </div>
  );
};

export default NotFoundPage;