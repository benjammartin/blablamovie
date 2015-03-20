var React = require('react');

var style = {
  height: "37px"
};

var Logo = React.createClass({
  render: function() {
    return (
      <img src={'/images/logo.png'} style={style} />
    );
  }
});

module.exports = Logo;
