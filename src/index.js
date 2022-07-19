import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'



/* import noteService from './services/notes'
/* import { setNotes } from "./reducers/noteRuducer"; */
/* import { setNotes } from './reducers/noteRuducer';  */






/* noteService.getAll().then(notes => 
  note => {
    store.dispatch(setNotes(notes));
  }
) */


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);


