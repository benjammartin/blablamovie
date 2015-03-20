var React = require('react');

var leftStyle = {
  
};

var rightStyle = {
  
};

var UpvoteButton = React.createClass({
  render: function() {
    return (
      <span>
        <span style={leftStyle}>{this.props.votes}</span>
        <span style={rightStyle}>Upvote</span>
      </span>
    );
  }
});

module.exports = UpvoteButton;
