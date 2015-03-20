var React = require('react');
var Logo = require('./Logo');
var PostButton = require('./PostButton');

var Header = React.createClass({
  render: function() {
    return (
      <div className="grid">
        <Logo />
        <PostButton />
      </div>
    );
  }
});

module.exports = Header;
