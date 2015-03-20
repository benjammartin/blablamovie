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
        <span style={rightStyle} onClick={this.onClick}>Upvote</span>
      </span>
    );
  },
  onClick: function() {
    this.props.handleUpvote(this.props.id);
  }
});

module.exports = UpvoteButton;
