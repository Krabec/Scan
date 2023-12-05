import style from './tarif.module.css';

function Tarif( {tarif} ) {
	return (
	  <div className={style.tarif} style={tarif.currentTarif ? {border: tarif.border} : {border: "none"}}>
        <div className={style.headerDiv} style={tarif.tarifStyle} >
            <div className={style.headerDivText}>
                <p className={style.headerP}>{tarif.name}</p>
                <p className={style.descriptionTarif}>{tarif.descriptionTarif}</p>
            </div>
            <img src={tarif.img} alt=''></img>
        </div>
        <div className={style.descriptionTextTarif}>
          <div className={tarif.currentTarif && style.currentTarif} hidden={!tarif.currentTarif}><p>Текущий тариф</p></div>
          <div className={style.price}>
            <p className={style.priceDiscount}>{tarif.priceDiscount}</p>
            <p className={style.priceNoDiscount}>{tarif.priceNoDiscount}</p>
          </div>
          <p className={style.descriptionPrice}>{tarif.descriptionPrice}</p>
          <h3>В тариф входит</h3>
          <ul className={style.list}>
            {tarif.includedInTariff.map((elem) => {
              return <li className={style.includedInTariff}>{elem}</li>
            })}
          </ul>
          <button className={style.buttonTarif + " " + style.buttonCurrent} hidden={!tarif.currentTarif}>Перейти в личный кабинет</button>
          <button className={style.buttonTarif} hidden={tarif.currentTarif}>Подробнее</button>

        </div>
        

      </div>
	);
  }

  export default Tarif;