import style from "./avatar.module.css";

function Avatar() {
	return (
		<div className={style.avatar}>
			<div className={style.left}>
				<p className={style.name}>Алексей А.</p>
				<button className={style.button}>Выйти</button>
			</div>
			<div className={style.imageAvatar}></div>
		</div>
	)
}

export default Avatar;