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
        <div className={style.currentTarif} hidden={!tarif.currentTarif}>Текущий тариф</div>
        <div className={style.price}>
          <p className={style.priceDiscount}>{tarif.priceDiscount}</p>
          <p className={style.priceNoDiscount}>{tarif.priceNoDiscount}</p>
        </div>
        <p className={style.descriptionPrice}>{tarif.descriptionPrice}</p>
        <ul>
          <h3>В тариф входит</h3>
          {tarif.includedInTariff.map((elem) => {
            return <li className={style.includedInTariff}>{elem}</li>
          })}
        </ul>
        <button hidden={!tarif.currentTarif}>Перейти в личный кабинет</button>
        <button hidden={tarif.currentTarif}>Подробнее</button>

      </div>
	);
  }

  export default Tarif;