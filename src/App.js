import { useContext, useEffect } from 'react';
import style from './App.module.css';
import PagesAuthorization from './screens/authorization/PagesAuthorization';
import Main from './screens/main/Main';
import { Route, Routes } from "react-router-dom";
import { Context } from './index';
import { observer } from 'mobx-react-lite';


function App() {
  const {store} = useContext(Context);

  useEffect(() => {
    if(localStorage.getItem('token')) {
      store.checkAuth()
    }
  })

  return (
    <>
      <Routes>
				<Route path="/" element={
					 <Main/>
				} />
				<Route path="/authorization" element={ 
          <PagesAuthorization/> 
        }/>
			</Routes>	
    </>
  );
}

export default observer(App);
