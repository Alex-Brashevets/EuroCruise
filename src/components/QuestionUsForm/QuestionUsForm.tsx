import styles from './QuestionUsForm.module.css'
import {Input} from "../ui/Inputs/Input/Input";
import {TextArea} from "../ui/Inputs/TextArea/TextArea";

export const QuestionUsForm = () => {
  return (
      <div className={styles.container}>
        <h3>Задай нам вопрос</h3>
        <form action="" className={styles.form}>
          <Input placeholder='Имя'/>
          <Input placeholder='Телефон'/>
          <Input placeholder='Почта'/>
          <TextArea placeholder={'Коментарий'}/>
          <div className={styles.button_container}>
            <button type='submit' className={styles.button}>Отправить</button>
          </div>
        </form>

      </div>
  );
};

