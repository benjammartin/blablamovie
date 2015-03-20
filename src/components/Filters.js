var React = require('react');

var liItem = {
  marginRight: '60px',
  letterSpacing: '2px',
  color: '#9B9B9B',
  paddingBottom: '16px'
};

var filters = [
  'Top',
  'Latest',
  'Bookmarks'
];

var Trending = React.createClass({
  render: function() {
    var self = this;
    var filterNodes = filters.map(function (filter, index) {
      return (
        <li onClick={self.onClick} style={liItem} className={"inline " + (filter === self.props.filter ? 'active-li' : '')} key={index}>{filter}</li>
      );
    });
    return (
      <ul className="ul-list">
        {filterNodes}
      </ul>
    );
  },
  onClick: function(e) {
    this.props.handleFilter(e.target.textContent);
  }
});

module.exports = Trending;
