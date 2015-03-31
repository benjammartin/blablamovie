var React = require('react');

var Tag = React.createClass({
  render: function () {
    return (
      <span className="tag">{this.props.children}</span>
    );
  }
});

module.exports = Tag;
