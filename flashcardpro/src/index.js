import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import Stack from './component/Stack';
import {createStore} from 'redux';
import rootReducer from './reducers';
import {BrowserRouter ,Switch ,Route } from 'react-router-dom';
import {Providor} from 'react-redux';
import {setStack} from './actions';

const store= createStore(rootReducer);
store.subscribe(()=>console.log('store',store.getState()));
store.dispatch(setStack({id: 0, ttile: 'example', cards: []}));

ReactDOM.render(

<Providor store={store}>
<BrowserRouter>
<Switch>
  <Route exact path='/' component={App}/>
  <Route  path='/stack' component={Stack}/>
</Switch>
</BrowserRouter>
</Providor>,

document.getElementById('root'));
