/** @jsx React.DOM */
var React = require('react');
var mui  = require('material-ui');
var LeftNav = mui.LeftNav;
var MenuItem = mui.MenuItem;
var App = React.createClass({
  getInitialState: function () {
    return {
      message: 'Hello World!'
    };
  },
	render: function() {
		var menuItems = [
  { route: 'get-started', text: 'Get Started' },
  { route: 'css-framework', text: 'CSS Framework' },
  { route: 'components', text: 'Components' },
  { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
  { 
     type: MenuItem.Types.LINK, 
     payload: 'https://github.com/callemall/material-ui', 
     text: 'GitHub' 
  },
  { 
     text: 'Disabled', 
     disabled: true 
  },
  { 
     type: MenuItem.Types.LINK, 
     payload: 'https://www.google.com', 
     text: 'Disabled Link', 
     disabled: true 
  },
];
		return (
//Hideable Left Nav
<LeftNav docked={true} menuItems={menuItems} />
		);
	}
	
});
	
module.exports = App;