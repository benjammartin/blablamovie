var React = require('react');

var button = {
  marginTop: '7px',
  marginBottom: '20px',
  fontSize: '13px',
  fontWeight: '600',
  display: 'inline-block'
};

var leftStyle = {
  background: '#F24B49',
  padding: '7px 12px',
  borderRadius: '2px 0 0 2px',
  borderTop: '1px solid #F24B49',
  borderBottom: '1px solid #F24B49',
  borderLeft: '1px solid #F24B49',
  color: '#fff'
};

var rightStyle = {
  padding: '7px 12px',
  borderRadius: '0 2px 2px 0',
  borderTop: '1px solid rgba(241, 241, 241, .8)',
  borderBottom: '1px solid rgba(241, 241, 241, .8)',
  borderRight: '1px solid rgba(241, 241, 241, .8)'
};

var UpvoteButton = React.createClass({
  render: function() {
    return (
      <span style={button}>
        <span style={leftStyle}>{this.props.votes}</span>
        <span style={rightStyle} onClick={this.onClick}>Upvote</span>
      </span>
    );
  },
  onClick: function() {
    this.props.handleUpvote(this.props.id);
  }
});

module.exports = UpvoteButton;
