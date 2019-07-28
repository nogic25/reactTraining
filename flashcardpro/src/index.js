import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './component/App';
import Stack from './component/Stack';
import StackForm from './component/StackForm';
//import StackForm from './components/StackForm';
import { setStack } from './actions';
import './index.css';

// short circuting 
const initialState=JSON.parse(localStorage.getItem('reduxStore')) || {}
const store = createStore(rootReducer,initialState);
store.subscribe(() => {
  localStorage.setItem('reduxStore',JSON.stringify(store.getState()))
  console.log('store', store.getState())
});
store.dispatch(setStack({ id: 0, title: 'example', cards: [] }));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/stack' component={Stack} />
        <Route path='/stack_form' component={StackForm} />
      </Switch>
    </BrowserRouter>
   </Provider>,
  document.getElementById('root')
);
