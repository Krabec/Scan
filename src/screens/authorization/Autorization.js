import style from './autorization.module.css';
import google from '../../images/google.svg';
import facebook from '../../images/facebook.svg';
import yandex from '../../images/yandex.svg';

function Authorization() {
	return (
	  <div className={style.autorization}>
        <div className={style.buttonsHeader}>
            <button className={style.buttonHeader + " " + style.activeHeaderButton}>Войти</button>
            <button className={style.buttonHeader}>Зарегистрироваться</button>
        </div>
        <form className={style.form}>
            <label className={style.label} for="username">Логин или номер телефона:</label>
            <input className={style.input} type="text" id="username"></input>
            <label className={style.label} for="password">Пароль:</label>
            <input className={style.input} type="password" id="password"></input>
            <button className={style.buttonEnter} disabled>Войти</button>
            <button className={style.buttonRecover}>Восстановить пароль</button>
            <label className={style.label}>Войти через:</label>
            <div className={style.social}>
                <button  className={style.bottonVia}><img src={google}></img></button >
                <button  className={style.bottonVia}><img src={facebook}></img></button >
                <button  className={style.bottonVia}><img src={yandex}></img></button >
            </div>
        </form>
      </div>
	);
  }

  export default Authorization;