var React = require('react');
var Header = require('./Header');

var style = {
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '10px',
  width: '960px'
};

var App = React.createClass({
  render: function() {
    return (
      <div style={style}>
        <Header />
      </div>
    );
  }
});

module.exports = App;
