var React = require('react');

var Logo = React.createClass({
  render: function() {
    return (
      <h1 className="logo"><a href="./">blabla<span className="bolder">movie</span></a></h1>
    );
  }
});

module.exports = Logo;
