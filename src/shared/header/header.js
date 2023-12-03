import style from './header.module.css';
import Unregistered from './unregistered';
import HeaderNav from './headerNav';
import Avatar from './avatar';
import Limite from './limite';
import ButtonMenu from './ButtonMenu';
import { ReactComponent as Logo } from "../../images/logo.svg"

function Header() {
  return (
    <header className={style.header + " container"}>
      <Logo/>
      <div className="displayNonePhone">
        <HeaderNav/>
      </div>
      <div className={style.limite}>
        <Limite/>
      </div>
      {/* <Unregistered/> */}
      <div className="displayNonePhone">
        <Avatar/>
      </div>
      <div className="displayNoneDesctop">
        <ButtonMenu/>
      </div>
      
    </header>
  );
}

export default Header;