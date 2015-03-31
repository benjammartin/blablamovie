var React = require('react');

var UpvoteButton = React.createClass({
  render: function() {
    return (
      <span className="upvote-btn">
        <span className="left inline">{this.props.votes}</span>
        <span className="right inline" onClick={this.onClick}>Upvote</span>
      </span>
    );
  },
  onClick: function() {
    this.props.handleUpvote(this.props.id);
  }
});

module.exports = UpvoteButton;
