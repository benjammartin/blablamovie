var React = require('react');

var style = {
  color: '#999999',
  marginLeft: '10px',
  display: 'inline-block',
  verticalAlign: 'middle'
};

var author = {
  fontWeight: '400'
}

var DiscoveredBy = React.createClass({
  render: function () {
    return (
      <span style={style}>Discovered by <span style={author}>{this.props.name}</span></span>
    );
  }
});

module.exports = DiscoveredBy;
