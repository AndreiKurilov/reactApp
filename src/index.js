import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from './StoreContext';
import store from './redux/redux-store';
import App from './App';

let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App 
            //  state={state} 
            //  dispatch ={store.dispatch.bind(store)} 
            //  store={store} 
        />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
