var React = require('react');

var DiscoveredBy = React.createClass({
  render: function () {
    return (
      <span className="author">Discovered by <span className="bolder">{this.props.name}</span></span>
    );
  }
});

module.exports = DiscoveredBy;
