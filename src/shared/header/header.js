import style from './header.module.css';
import Unregistered from './unregistered';
import HeaderNav from './headerNav';
import Avatar from './avatar';
import Limite from './limite';
import ButtonMenu from './ButtonMenu';
import { ReactComponent as Logo } from "../../images/logo.svg"
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [authorized, setAuthorized] = useState(false);

  return (
    <header className={style.header + " container"}>
      <Link to="/"><Logo/></Link>
      <div className="displayNonePhone">
        <HeaderNav/>
      </div>
      { 
          authorized &&
          <div className={style.limite}>
            <Limite/>
          </div>
      }
      <div className="displayNonePhone">
        {authorized ? <Avatar/> : <Unregistered/>}
      </div>
      <div className="displayNoneDesctop">
        <ButtonMenu/>
      </div>
      
    </header>
  );
}

export default Header;