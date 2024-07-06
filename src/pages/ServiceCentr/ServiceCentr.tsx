import {useNavigate} from "react-router-dom"
import ThreeLine from "/src/assets/line.svg";
import styles from './ServiceCentr.module.css'
import { Input } from "../../components/ui/Inputs/Input/Input";
import { TextArea } from "../../components/ui/Inputs/TextArea/TextArea";
const ServiceCentr = (): JSX.Element => {

  return (
    <>
    <div className={styles.container}>
        <div className={styles.info_container}>
            <h1>
                Сервисный центр <b>"Еврокруиза"</b>
            </h1>
            <p>Добро пожаловать в сервисный центр "Еврокруиза"! Если у вас возникли проблемы с круизным лайнером, мы поможем вам как можно скорее.</p>
            <h2>
                Оставьте заявку на ремонт
            </h2>
            <p>Вы можете оставить заявку на ремонт в нашем сервисном центре, заполнив форму ниже. Укажите описание проблемы и контакты. Наши опытные инженеры свяжутся с вами в ближайшее время, чтобы согласовать детали и записать вас на обслуживание.</p>
            <h2>
                Позвоните нам
            </h2>
            <p>Если вы предпочитаете связаться с нами по телефону, позвоните по номеру +1 (555) 555-5555. Наши сотрудники с радостью ответят на все ваши вопросы и помогут записать вас на ремонт.</p>
        </div>
        <form action="" className={styles.form}>
          <Input placeholder='Имя'/>
          <Input placeholder='Телефон'/>
          <TextArea placeholder={'Коментарий'}/>
          <div className={styles.button_container}>
            <button type='submit' className={styles.button}>Отправить</button>
          </div>
        </form>
    </div>
    </>
  );
};
export default ServiceCentr;