import MainCar from "/src/assets/car1.svg";
import ThreeLine from "/src/assets/line.svg";
import styles from './Sales.module.css'
const Sales = (): JSX.Element => {
  return (
    <><div className={styles.container2}>
          <div className={styles.abotus}>
              <div className={styles.vibe}>
                  <h2 className={styles.about}>Продажа техники с пробегом </h2>
                  <img className={styles.line} src={ThreeLine} />
              </div>
              <p className={styles.paragraph}>
                  {" "}
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat,
                  similique nihil aperiam dolorum dolor consequuntur illo eum totam
                  velit impedit,
                  <br /> reiciendis exercitationem quia necessitatibus, perferendis
                  asperiores! Quod similique quidem deserunt.     Lorem ipsum dolor
                  sit, amet consectetur adipisicing elit. Quos blanditiis labore
                  <br /> qui numquam architecto? Sunt repudiandae aperiam in rerum
                  nesciunt, inventore doloremque quia. Dolore ullam amet, similique
                  vero minima ex?
              </p>
          </div>
          <img className={styles.img} src={MainCar} />
      </div></>
  );
};
export default Sales;