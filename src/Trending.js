var React = require('react');

var style = {
  float: 'right',
  width: '30%'
};

var Trending = React.createClass({
  render: function() {
    return (
      <div style={style}>
        Trending
      </div>
    );
  }
});

module.exports = Trending;
