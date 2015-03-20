var React = require('react');
var Header = require('./Header');
var Body = require('./Body');

var style = {
  marginTop: '26px',
  paddingBottom: '26px',
  boxShadow: '0px 1px 4px 0px rgba(230, 230, 230, 0.50)'
};

var App = React.createClass({
  render: function() {
    return (
      <div>
        <div style={style}>
          <Header />
        </div>

        <Body />
      </div>
    );
  }
});

module.exports = App;
