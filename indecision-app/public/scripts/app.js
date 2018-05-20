'use strict';

console.log('app.js is running');

// JSX - JavaScript XML
var template = React.createElement(
  'p',
  null,
  'This is JSX from app.js! Also kek'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

console.log('why donut?!?!?');
