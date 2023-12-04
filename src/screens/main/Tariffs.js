import Tarif from './Tarif';
import style from './tariffs.module.css';

function Tariffs() {
	return (
	  <section className={style.tariffs}>
        <h2>наши тарифы</h2>
        <div className={style.containerTarifs}>
            <Tarif/>
            <Tarif/>
            <Tarif/>
        </div>
      </section>
	);
  }

  export default Tariffs;