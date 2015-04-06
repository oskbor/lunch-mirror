/** @jsx React.DOM */
var React = require('react');

var App = React.createClass({
  getInitialState: function () {
    return {
      message: 'Hello World!'
    };
  },
	render: function() {
		return (
			<h2>
      {this.state.message}
      </h2>
		);
	}
	
});
	
module.exports = App;