var React = require('react');

var style = {
  
};

var Tag = React.createClass({
  render: function () {
    return (
      <span style={style}>{this.props.children}</span>
    );
  }
});

module.exports = Tag;
