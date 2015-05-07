

var React = require('react');
window.React = React;
var HelloWorld = require('./HelloWorld.jsx');

setTimeout(function(){
  console.log('over');
  React.render(<HelloWorld />, document.getElementById('app'));
},10000)