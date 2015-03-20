var React = require('react');

var liItem = {
  marginRight: '60px',
  letterSpacing: '2px',
  color: '#9B9B9B',
  paddingBottom: '16px'
}

var Trending = React.createClass({
  render: function() {
    return (
      <ul className="ul-list">
        <li style={liItem} className="inline active-li">Top</li>
        <li style={liItem} className="inline">Lastest</li>
        <li style={liItem} className="inline">Bookmarks</li>
      </ul>
    );
  }
});

module.exports = Trending;
