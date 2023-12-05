import Tarif from './Tarif';
import style from './tariffs.module.css';

function Tariffs() {
  const tariffs = [
    {
      "name": 'Beginner',
      "descriptionTarif": "Для небольшого исследования",
      "img": "",
      "currentTarif": true,
      "priceDiscount": "799 ₽",
      "priceNoDiscount": "1 200 ₽",
      "descriptionPrice": "или 150 ₽/мес. при рассрочке на 24 мес.",
      "includedInTariff": [
        "Безлимитная история запросов",
        "Безопасная сделка",
        "Поддержка 24/7"
      ],
      tarifStyle: {
        color: "#000000",
        backgroundColor: "#FFB64F"
      },
      border: "1px solid #FFB64F"
    },
    {
      "name": 'Pro',
      "descriptionTarif": "Для HR и фрилансеров",
      "img": "",
      "currentTarif": false,
      "priceDiscount": "1 299 ₽",
      "priceNoDiscount": "2 600 ₽",
      "descriptionPrice": "или 279 ₽/мес. при рассрочке на 24 мес.",
      "includedInTariff": [
        "Все пункты тарифа Beginner",
        "Экспорт истории",
        "Рекомендации по приоритетам"
      ],
      tarifStyle: {
        color: "#000000",
        backgroundColor: "#7CE3E1",
      },
      border: "1px solid #7CE3E1"
    },
    {
      "name": 'Business',
      "descriptionTarif": "Для корпоративных клиентов",
      "img": "",
      "currentTarif": false,
      "priceDiscount": "2 379 ₽",
      "priceNoDiscount": "3 700 ₽",
      "descriptionPrice": "",
      "includedInTariff": [
        "Все пункты тарифа Pro",
        "Безлимитное количество запросов",
        "Приоритетная поддержка"
      ],
      tarifStyle: {
        color: "#FFFFFF",
        backgroundColor: "#000000",
      },
      border: "1px solid #000000"
    },
  ]
	return (
	  <section className={style.tariffs}>
        <h2>наши тарифы</h2>
        <div className={style.containerTarifs}>
            <Tarif tarif={tariffs[0]}/>
            <Tarif tarif={tariffs[1]}/>
            <Tarif tarif={tariffs[2]}/>
        </div>
      </section>
	);
  }

  export default Tariffs;