var React = require('react');

var style = {
  width: '30px'
};

var DiscoveredBy = React.createClass({
  render: function () {
    return (
      <span>Discovered by <span>{this.props.name}</span></span>
    );
  }
});

module.exports = DiscoveredBy;
