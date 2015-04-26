/** @jsx React.DOM */
var React = require('react');
var injectTapEventPlugin = require("react-tap-event-plugin");

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();	

//Needed for React Developer Tools
window.React = React;

var App = require('./app.js');
React.render(<App/>, document.body);