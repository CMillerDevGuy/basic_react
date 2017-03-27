import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './app/Counter.jsx';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('app')
  );
});
