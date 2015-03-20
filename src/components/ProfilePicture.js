var React = require('react');

var style = {
  width: '26px',
  borderRadius: '50px',
  verticalAlign: 'middle'
};

var ProfilePicture = React.createClass({
  render: function () {
    return (
      <img src={this.props.url} style={style} />
    );
  }
});

module.exports = ProfilePicture;
