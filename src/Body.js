var React = require('react');
var Trending = require('./Trending');
var Reviews = require('./Reviews');

var style = {

};

var Body = React.createClass({
  render: function() {
    return (
      <div style={style}>
        <Trending />
        <Reviews />
      </div>
    );
  }
});

module.exports = Body;
