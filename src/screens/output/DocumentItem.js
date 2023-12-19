import style from './documentItem.module.css';


function DocumentItem() {
	return (
	  <li className={style.documentItem}>
        <div className={style.header}> 
            <p className={style.paragraphNumber}>13.09.2021</p>
            <a className={style.link} href="#">Комсомольская правда KP.RU</a>
        </div>
        <h4 className={style.headerText}>Скиллфэктори - лучшая онлайн-школа для будущих айтишников</h4>
        <div className={style.categiry}>Технические новости</div>
        <img className={style.images} src=''></img>
        <div className={style.paragraphDiv}>
            <p className={style.paragraph}>
                SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.
            </p>
            <p className={style.paragraph}>
                Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.
            </p>
            <p className={style.paragraph}>
                Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.
            </p>
        </div>
        <div className={style.footer}>
            <button className={style.button}>Читать в источнике</button>
            <p className={style.paragraphNumber}>2 543 слова</p>
        </div>
	  </li>
	);
  }

  export default DocumentItem;