import React from 'react'
import App from './App';
import ReactDOM from 'react-dom'
import Store from './store';
import {Provider} from 'react-redux';


const store = Store({})


store.subscribe(()=>{
  console.log(store.getState());
})

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
)
