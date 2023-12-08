import style from "./headerNav.module.css";
import { Link } from "react-router-dom";

function HeaderNav() {
	return (
		<nav className={style.nav}>
			<ul className={style.ul}>
				<li className={style.li}><Link to="/">Главная</Link></li>
				<li className={style.li}><a className={style.a} href='#'>Тарифы</a></li>
				<li className={style.li}><a className={style.a} href='#'>FAQ</a></li>
			</ul>
	  	</nav>
	);
  }
  
  export default HeaderNav;