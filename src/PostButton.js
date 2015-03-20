var React = require('react');

var style = {
  backgroundColor: '#F24B49',
  border: '1px solid #E62D78',
  borderRadius: '2px',
  fontSize: '14px',
  color: '#FFFFFF',
  letterSpacing: '1px',
  lineHeight: '35px',
  textAlign: 'center',
  width: '117px',
  height: '35px',
  float: 'right'
};

var PostButton = React.createClass({
  render: function() {
    return (
      <div style={style}>
        POST LINK
      </div>
    );
  }
});

module.exports = PostButton;
