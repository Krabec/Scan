import style from './autorization.module.css';

function Authorization() {
	return (
	  <div className={style.autorization}>
        <div className={style.buttons}>
            <button className={style.button}>Войти</button>
            <button className={style.button}>Зарегистрироваться</button>
        </div>
        <form>
            <h3></h3>
            <label for="username">Логин или номер телефона:</label>
            <input type="text" id="username"></input>
            <label for="password">Пароль:</label>
            <input type="password" id="password"></input>
            <button>Войти</button>
            <button>Восстановить пароль</button>
            <label>Войти через:</label>
            <div class="social">
                <div class="go"><i class="fab fa-google"></i>  Google</div>
                <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
                <div class="ya"><i class="fab fa-ya"></i>  Яндекс</div>
            </div>
        </form>
      </div>
	);
  }

  export default Authorization;