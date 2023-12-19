import DocumentItem from './DocumentItem';
import style from './listDocument.module.css';


function ListDocument() {
	return (
	  <section className={style.listDocument}>
        <h3 className={style.header}>Список документов</h3>
        <ul className={style.documents}>
            <DocumentItem/>
            <DocumentItem/>
            <DocumentItem/>
            <DocumentItem/>
        </ul>
        <button className={style.button}>Паказать больше</button>
	  </section>
	);
  }

  export default ListDocument;