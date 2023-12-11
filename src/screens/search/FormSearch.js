import style from './FormSearch.module.css';
import { useState } from 'react';

function FormSearch() {
  const [inn, setInn] = useState();
  const [password, setPassword] = useState();


  /* useEffect(() => {
    if(erorLogin || erorPassword) {
      setValidForm(false)
    } else {
      setValidForm(true)
    }
  }, [erorLogin, erorPassword]) */

  const handlerLogin = (e) => {
    setInn(e.target.value)
  }

  const handlerPassword = (e) => {
    setPassword(e.target.value)
  }

/*   const handlerBlur = (e) => {
    switch (e.target.name) {
      case 'login':
        setLoginDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
    }
  } */

	return (
	  <div className={style.formSearch}>
        <form className={style.form}>
            <div className={style.containerInput}>
                <label className={style.label} for="username">ИНН компании*</label>
                <input
                    placeholder='10 цифр'
                    onChange={(e) => handlerLogin(e)}
                    value={inn}
                    className={style.input} 
                    type="text"
                    name = "INN"
                    id="INN">
                </input>
                <p className={style.erorLogin}>erorLogin</p>
                <label className={style.label} for="password">Тональность</label>
                <input
                onChange={e => handlerPassword(e)}
                /* value={password} */
                className={style.input + ' ' + style.error} 
                type="password"
                name = "password" 
                id="password">
                </input>
                <label className={style.label} for="password">Количество документов в выдаче*</label>
                <input
                    placeholder='От 1 до 1000'
                    onChange={e => handlerPassword(e)}
                    /* value={password} */
                    className={style.input + ' ' + style.error} 
                    type="password"
                    name = "password" 
                    id="password">
                </input>
                <p className={style.erorPassword}>erorPassword</p>
            </div>
            <div className={style.containerCheckbox}>
                <div>
                    <input type="checkbox" id="scales" name="scales" checked />
                    <label for="scales">Scales</label>
                </div>

                <div>
                    <input type="checkbox" id="horns" name="horns" />
                    <label for="horns">Horns</label>
                </div>

            </div>
            <label className={style.label} for="password">Диапазон поиска*</label>
            <div>
                <input
                    placeholder='Дата начала'
                    onChange={e => handlerPassword(e)}
                    /* value={password} */
                    className={style.input + ' ' + style.error} 
                    type="password"
                    name = "password" 
                    id="password">
                </input>
                <input
                    placeholder='Дата конца'
                    onChange={e => handlerPassword(e)}
                    /* value={password} */
                    className={style.input + ' ' + style.error} 
                    type="password"
                    name = "password" 
                    id="password">
                </input>
            </div>
            <p className={style.erorPassword}>erorPassword</p>
            <button 
              onClick={(event) => {
                event.preventDefault()
              }}
              className={style.buttonEnter}
              disabled>Войти</button>
            <button className={style.buttonRecover}>Восстановить пароль</button>
            <label className={style.label}>Войти через:</label>
        </form>
      </div>
	);
  }

  export default FormSearch;