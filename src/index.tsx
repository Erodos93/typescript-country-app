import React from 'react';
import ReactDOM from 'react-dom/client';
import {store} from "./reducer/store"
import './scss/main.scss';
import App from './App';
import { Provider } from 'react-redux';
import { searchAllData } from './reducer/countryNameReducer';

 const main=async()=>{
  await store.dispatch(searchAllData())
}
main()
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
   </React.StrictMode>
);


