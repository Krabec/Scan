import style from "./limite.module.css";
import { ReactComponent as Load } from "../../images/load.svg"

function Limite() {
	return (
		<div className={style.limites}>
			{/* <Load/> */}
			<div className={style.limiteContainer}>
				<div className={style.limite}>
					<p>Использовано компаний </p><span className={style.span}>34</span>
				</div>
				<div className={style.limite}>
					<p>Лимит по компаниям </p><span className={style.span + " " + style.colorGreen}>100</span>
				</div>
			</div>
		</div>
	)
}

export default Limite;