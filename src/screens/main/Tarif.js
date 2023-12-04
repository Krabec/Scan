import style from './tarif.module.css';

function Tarif() {
	return (
	  <div className={style.tarif}>
        <div className={style.headerDiv}>
            <div>
                <p className={style.headerP}></p>
                <p className={style.description}></p>
            </div>
            <img src={''} alt=''></img>
        </div>

      </div>
	);
  }

  export default Tarif;