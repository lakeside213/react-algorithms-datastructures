import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import configureStore, { history } from './store/store';
import { Provider } from 'react-redux';

const store = configureStore()


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App history={history} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

