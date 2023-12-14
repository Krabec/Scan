import validateInn from '../../services/valideInn';
import style from './FormSearch.module.css';
import { useState, useEffect } from 'react';

function FormSearch() {

    const [inn, setInn] = useState("");
    const [tonality, setTonality] = useState("");
    const [countDocuments, setCountDocuments] = useState("");
    const [searchRangeStart, setSearchRangeStart] = useState("");
    const [searchRangeEnd, setSearchRangeEnd] = useState("");

    const [completeness, setCompleteness] = useState(false)
    const [business, setBusiness] = useState(false)
    const [role, setRole] = useState(false)
    const [risk, setRisk] = useState(false)
    const [news, setNews] = useState(false)
    const [announcements, setAnnouncements] = useState(false)
    const [summary, setSummary] = useState(false)

    const [innDirty, setInnDirty] = useState(false);
    const [countDocumentsDirty, setCountDocumentsDirty] = useState(false);
    const [searchRangeStartDirty, setSearchRangeStartDirty] = useState(false);
    const [searchRangeEndDirty, setSearchRangeEndDirty] = useState(false);
    const [erorInn, setErorInn] = useState("Введите корректные данные");
    const [erorCountDocuments, setErorCountDocuments] = useState("Введите корректные данные");
    const [erorSearchRange, setErorSearchRange] = useState("Введите корректные данные");
    const [validForm, setValidForm] = useState(false);

    useEffect(() => {
        if(erorInn || erorCountDocuments || erorSearchRange) {
          setValidForm(false)
        } else {
          setValidForm(true)
        }
    }, [erorInn, erorCountDocuments, erorSearchRange])

    const handlerCheckbox = (e) => {
        switch (e.target.name) {
            case 'completeness':
                setCompleteness(!completeness)
                break
            case 'business':
                setBusiness(!business)
                break
            case 'role':
                setRole(!role)
                break
            case 'risk':
                setRisk(!risk)
                break
            case 'news':
                setNews(!news)
                break
            case 'announcements':
                setAnnouncements(!announcements)
                break
            case 'summary':
                setSummary(!summary)
                break
            default:
                console.log(e);
        }
    }

    const handlerBlur = (e) => {
        switch (e.target.name) {
            case 'inn':
                setInnDirty(true)
                break
            case 'searchRangeStart':
                setSearchRangeStartDirty(true)
                break
            case 'searchRangeEnd':
                setSearchRangeEndDirty(true)
                break
            case 'countDocuments':
                setCountDocumentsDirty(true)
                break
            default:
                console.log(e);
        }
    }
    

    const handlerInn = (e) => {
        setInn(e.target.value)
        if(!validateInn(e.target.value, {})) {
            setErorInn('Введите корректные данные')
        } else {
            setErorInn('')
        }
    }
  

    const handlerTonality = (e) => {
        setTonality(e.target.value)
    }

    const handlerCountDocuments = (e) => {
        setCountDocuments(e.target.value)
        if(!e.target.value) {
            setErorCountDocuments('Обязательное поле')
        } else if(Number(e.target.value) < 1 || Number(e.target.value) > 1000) {
            setErorCountDocuments('Введите корректные данные 555')
        } else {
            setErorCountDocuments('')
        }
    }

    const handlerSearchRange = (e) => {
        console.log(e.target.name)
        switch (e.target.name) {
            case 'searchRangeStart':
                setSearchRangeStart(e.target.value)
                if((searchRangeEnd < e.target.value) || (e.target.value === undefined)) {
                    setErorSearchRange('Введите корректные данные')
                } else {
                    setErorSearchRange('')
                }
                break
            case 'searchRangeEnd':
                setSearchRangeEnd(e.target.value)
                if((searchRangeStart > e.target.value) || (e.target.value === undefined)) {
                    setErorSearchRange('Введите корректные данные')
                } else {
                    setErorSearchRange('')
                }
                break
            default:
                console.log(e);
        }
    }

	return (
	  <div className={style.formSearch}>
        <form className={style.form}>
            <div className={style.containerInput}>
                <label className={style.label} htmlFor="username">ИНН компании<span className={style.spanEror}>*</span></label>
                <input
                    placeholder='10 цифр'
                    onChange={(e) => handlerInn(e)}
                    onBlur={(e) => handlerBlur(e)}
                    value={inn}
                    className={style.input} 
                    type="number"
                    name = "inn">
                </input>
                {(innDirty && erorInn) && <p className={style.erorPassword}>{erorInn}</p>}
                <label className={style.label} htmlFor="password">Тональность</label>
                <select value={tonality}
                    onChange={(e) => handlerTonality(e)}
                    className={style.input + ' ' + style.inputOpen} 
                    name="tonality" 
                    id="tonality">

                    <option value="">Любая</option>
                    <option value="dog">Негативная</option>
                    <option value="cat">Позитивная</option>
                </select>
                <label className={style.label} htmlFor="password">Количество документов в выдаче<span className={style.spanEror}>*</span></label>
                <input
                    placeholder='От 1 до 1000'
                    onChange={(e) => handlerCountDocuments(e)}
                    onBlur={(e) => handlerBlur(e)}
                    value={countDocuments}
                    className={style.input + ' ' + style.error} 
                    type="number"
                    name = "countDocuments">
                </input>
                {(countDocumentsDirty && erorCountDocuments) && <p className={style.erorPassword}>{erorCountDocuments}</p>}
                <label className={style.label} htmlFor="password">Диапазон поиска<span className={style.spanEror}>*</span></label>
                  <div className={style.labelDate}>
                    <input 
                        onBlur={(e) => handlerBlur(e)}
                        value={searchRangeStart}
                        onChange={(e) => {handlerSearchRange(e)}}
                        className={style.input + ' ' + style.inputDate + ' ' + style.inputOpen + ' ' + style.error}  
                        type="date" 
                        name="searchRangeStart" 
                        data-placeholder="Дата начала" 
                        required aria-required="true" />
                    <input 
                        onBlur={(e) => handlerBlur(e)}
                        value={searchRangeEnd}
                        onChange={(e) => {handlerSearchRange(e)}}
                        className={style.input + ' ' + style.inputDate + ' ' + style.inputOpen + ' ' + style.error}  
                        type="date" 
                        name="searchRangeEnd" 
                        data-placeholder="Дата конца"
                        required aria-required="true" />
                  </div>
                  {((searchRangeEndDirty && searchRangeStartDirty) && erorSearchRange) && <p className={style.erorPassword}>{erorSearchRange}</p>}
            </div>
            <div className={style.containerCheckbox}>
                <div className={style.checkbox}>
                    <input onClick={(e) => handlerCheckbox(e)} value={completeness} className={style.customCheckbox} type="checkbox" id="completeness" name="completeness"/>
                    <label htmlFor="completeness" className={style.labelCheckbox}>Признак максимальной полноты</label>
                </div>
                <div className={style.checkbox}>
                    <input onClick={(e) => handlerCheckbox(e)} value={business} className={style.customCheckbox} type="checkbox" id="business" name="business" />
                    <label htmlFor="business" className={style.labelCheckbox}>Упоминания в бизнес-контексте</label>
                </div>
                <div className={style.checkbox}>
                    <input onClick={(e) => handlerCheckbox(e)} value={role} className={style.customCheckbox} type="checkbox" id="role" name="role" />
                    <label htmlFor="role" className={style.labelCheckbox}>Главная роль в публикации</label>
                </div>
                <div className={style.checkbox}>
                    <input onClick={(e) => handlerCheckbox(e)} value={risk} className={style.customCheckbox} type="checkbox" id="risk" name="risk" />
                    <label htmlFor="risk" className={style.labelCheckbox}>Публикации только с риск-факторами</label>
                </div>
                <div className={style.checkbox}>
                    <input onClick={(e) => handlerCheckbox(e)} value={news} className={style.customCheckbox} type="checkbox" id="news" name="news" />
                    <label htmlFor="news" className={style.labelCheckbox}>Включать технические новости рынков</label>
                </div>
                <div className={style.checkbox}>
                    <input onClick={(e) => handlerCheckbox(e)} value={announcements} className={style.customCheckbox} type="checkbox" id="announcements" name="announcements" />
                    <label htmlFor="announcements" className={style.labelCheckbox}>Включать анонсы и календари</label>
                </div>
                <div className={style.checkbox}>
                    <input onClick={(e) => handlerCheckbox(e)} value={summary} className={style.customCheckbox} type="checkbox" id="summary" name="summary" />
                    <label htmlFor="summary" className={style.labelCheckbox}>Включать сводки новостей</label>
                </div>
                
                <button 
                  onClick={(event) => {
                    event.preventDefault()
                  }}
                  className={style.buttonSearch}
                  disabled={!validForm}>Поиск</button>
                  <p className={style.hint}>* Обязательные к заполнению поля</p>
            </div>
        </form>
      </div>
	);
  }

  export default FormSearch;