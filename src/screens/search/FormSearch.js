import style from './FormSearch.module.css';
import { useState } from 'react';

function FormSearch() {
  const [inn, setInn] = useState();

  const handlerLogin = (e) => {
    setInn(e.target.value)
  }


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
                /* onChange={e => handlerPassword(e)} */
                /* value={password} */
                className={style.input + ' ' + style.error} 
                type="password"
                name = "password" 
                id="password">
                </input>
                <label className={style.label} for="password">Количество документов в выдаче*</label>
                <input
                    placeholder='От 1 до 1000'
                    /* value={password} */
                    className={style.input + ' ' + style.error} 
                    type="password"
                    name = "password" 
                    id="password">
                </input>
                <p className={style.erorPassword}>erorPassword</p>
                <label className={style.label} for="password">Диапазон поиска*</label>
                  <div>
                      <input
                          placeholder='Дата начала'
                          /* value={password} */
                          className={style.input + ' ' + style.error} 
                          type="password"
                          name = "password" 
                          id="password">
                      </input>
                      <input
                          placeholder='Дата конца'

                          /* value={password} */
                          className={style.input + ' ' + style.error} 
                          type="password"
                          name = "password" 
                          id="password">
                      </input>
                  </div>
            </div>
            <div className={style.containerCheckbox}>
                <div>
                    <input type="checkbox" id="scales" name="scales" checked />
                    <label for="scales" className={style.labelCheckbox}>Признак максимальной полноты</label>
                </div>

                <div>
                    <input type="checkbox" id="horns" name="horns" />
                    <label for="horns" className={style.labelCheckbox}>Упоминания в бизнес-контексте</label>
                </div>
                <div>
                    <input type="checkbox" id="horns" name="horns" />
                    <label for="horns" className={style.labelCheckbox}>Главная роль в публикации</label>
                </div>
                <div>
                    <input type="checkbox" id="horns" name="horns" />
                    <label for="horns" className={style.labelCheckbox}>Публикации только с риск-факторами</label>
                </div>
                <div>
                    <input type="checkbox" id="horns" name="horns" />
                    <label for="horns" className={style.labelCheckbox}>Включать технические новости рынков</label>
                </div>
                <div>
                    <input type="checkbox" id="horns" name="horns" />
                    <label for="horns" className={style.labelCheckbox}>Включать анонсы и календари</label>
                </div>
                <div>
                    <input type="checkbox" id="horns" name="horns" />
                    <label for="horns" className={style.labelCheckbox}>Включать сводки новостей</label>
                </div>
                <button 
                  onClick={(event) => {
                    event.preventDefault()
                  }}
                  className={style.buttonEnter}
                  disabled>Войти</button>
            </div>
        </form>
      </div>
	);
  }

  export default FormSearch;