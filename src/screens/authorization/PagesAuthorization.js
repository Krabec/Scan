import Header from "../../shared/header/header";
import Footer from "../../shared/footer/footer";
import style from './pagesAuthorization.module.css';
import Authorization from "./Autorization";


function PagesAuthorization() {
	return (
	  <>
		<Header/>
		  <main className={style.main + " container"}>
			<h1>Для оформления подписки на тариф, необходимо авторизоваться.</h1>
			<Authorization/>
		  </main>
		<Footer/>
	  </>
	);
  }

  export default PagesAuthorization;