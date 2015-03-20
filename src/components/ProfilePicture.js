var React = require('react');

var style = {
  width: '30px',
  borderRadius: '50px'
};

var ProfilePicture = React.createClass({
  render: function () {
    return (
      <img src={this.props.url} style={style} />
    );
  }
});

module.exports = ProfilePicture;
