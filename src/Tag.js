var React = require('react');

var style = {
background: '#FAFAFA',
border: '1px solid #EDEDED',
borderRadius: '2px',
fontSize: '14px',
color: '#757575',
lineHeight: '17px'
};

var Tag = React.createClass({
  render: function () {
    return (
      <span style={style}>{this.props.children}</span>
    );
  }
});

module.exports = Tag;
