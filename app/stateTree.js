var baobab = require('baobab');
var _ = require('lodash');

var tree = new Baobab({
  restaurants: [
  	{
  		'name': 'Edison',
  		id:0
  	},
  	{
  		'name': 'Bryggan',
  		id:1
  	}
	],
  activeRestaurant: 0 
},
{
	facets: {
		selectedRestaurant: {
			cursors: {
				selectedId: ['activeRestaurant'],
				restaurants: ['restaurants']
			},
			get: function (data) {
				return _.find(data.restaurants, {id: data.selectedId});
			}
		}
	}
});

module.exports  = tree;