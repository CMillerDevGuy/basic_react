import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './app/Counter.jsx';

import { Provider } from 'react-redux';
import Store from './store/store.jsx';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(

    <Provider store={Store}>
      <Counter />
    </Provider>


    ,document.getElementById('app')
  );
});
