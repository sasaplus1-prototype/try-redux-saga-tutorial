import React from 'react';
import ReactDOM from 'react-dom';
import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import Counter from './Counter';
import reducer from './reducers';

import rootSaga from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);

function action(type) {
  return store.dispatch({
    type,
  });
}

function render() {
  ReactDOM.render(
    <Counter
      onDecrement={() => action('DECREMENT')}
      onIncrement={() => action('INCREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
      value={store.getState()}
    />,
    document.getElementById('root')
  );
}

render();

store.subscribe(render);
