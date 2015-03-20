var React = require('react');
var Filters = require('./Filters');
var Reviews = require('./Reviews');
var Trending = require('./Trending');

var Body = React.createClass({
  render: function() {
    return (
      <div className="grid">
        <Filters />
        <Reviews />
        <Trending />
      </div>
    );
  }
});

module.exports = Body;
