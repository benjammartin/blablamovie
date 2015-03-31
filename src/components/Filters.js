var React = require('react');

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
        <li onClick={self.onClick} className={"inline " + (filter === self.props.filter ? 'active' : '')} key={index}>{filter}</li>
      );
    });
    return (
      <ul className="filters-bar">
        {filterNodes}
      </ul>
    );
  },
  onClick: function(e) {
    this.props.handleFilter(e.target.textContent);
  }
});

module.exports = Trending;
