import Header from "../../shared/header/header";
import Footer from "../../shared/footer/footer";
//import style from './main.module.css';
import { useEffect, useContext } from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';




function Output() {
	const {store} = useContext(Context);

	return (
	  <>
		<Header/>
		  <main>
		  	<button onClick={(event) =>
				{
					event.preventDefault()
                	store.histograms(store.histogramsData)
				}
			}
			>test histograms</button>
			<button onClick={(event) =>
				{
					event.preventDefault()

					store.objectSearch(store.histogramsData)
				}
			}
			>test objectSearch</button>

		  </main>
		<Footer/>
	  </>
	);
  }

  export default observer(Output);