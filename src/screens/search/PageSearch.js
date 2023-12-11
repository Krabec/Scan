import Header from "../../shared/header/header";
import Footer from "../../shared/footer/footer";
import style from './PageSearch.module.css';
import FormSearch from "./FormSearch";



function PageSearch() {
	return (
	  <>
		<Header/>
		<main className={style.main + " container"}>
            <div className={style.contentDiv}>
                <h1 className={style.header}>Найдите необходимые данные в пару кликов.</h1>
                <p className={style.pharagraph}>Задайте параметры поиска. Чем больше заполните, тем точнее поиск</p>
                
                <FormSearch/>
            </div>
			<div className={style.imagisDiv}>

            </div>
		</main>

		<Footer/>

		
	  </>
	);
  }

  export default PageSearch;