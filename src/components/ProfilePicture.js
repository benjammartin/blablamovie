var React = require('react');

var ProfilePicture = React.createClass({
  render: function () {
    return (
      <img src={this.props.url} className="avatar" />
    );
  }
});

module.exports = ProfilePicture;
