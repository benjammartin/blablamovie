var React = require('react');
var Trending = require('./Trending');
var Reviews = require('./Reviews');

var Body = React.createClass({
  render: function() {
    return (
      <div>
        <Trending />
        <Reviews />
      </div>
    );
  }
});

module.exports = Body;
