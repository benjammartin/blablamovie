var React = require('react');

var PostButton = React.createClass({
  render: function() {
    return (
      <a className="post-btn" href="#">
        Share a link
      </a>
    );
  }
});

module.exports = PostButton;
