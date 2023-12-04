import style from './requestData.module.css';
import imgRequest from "../../images/requestData.png"

function RequestData() {
	return (
	  <section className={style.requestData}>
        <div className={style.text}>
            <h1 className={style.header}>сервис по поиску публикаций о компании по его ИНН</h1>
            <p className={style.pharagraph}>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
            <button className={style.button}>Запросить данные</button>
        </div>
        <img className={style.image} src={imgRequest} alt="Женщина работает" />
      </section>
	);
  }

  export default RequestData;