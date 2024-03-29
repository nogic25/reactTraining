import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './component/App';
import Stack from './component/Stack';
//import StackForm from './components/StackForm';
import { setStack } from './actions';
import './index.css';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(setStack({ id: 0, title: 'example', cards: [] }));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/stack' component={Stack} />
      </Switch>
    </BrowserRouter>
   </Provider>,
  document.getElementById('root')
);
