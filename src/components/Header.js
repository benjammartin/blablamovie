var React = require('react');
var Logo = require('./Logo');
var PostButton = require('./PostButton');

var Header = React.createClass({
  render: function() {
    return (
      <div>
        <Logo />
        <PostButton />
      </div>
    );
  }
});

module.exports = Header;
