var React = require('react');

var Trending = React.createClass({
  render: function() {
    return (
      <div className="aside-content inline">
        <h3 className="title">
          Trending
          <span className="all">All</span>
        </h3>

        <ul className="trending-list">
          <li>
            <span className="nbr inline">1</span>
            <p className="title-movie inline">Whiplash</p>
          </li>
          <li>
            <span className="nbr inline">2</span>
            <p className="title-movie inline">Batman begins</p>
          </li>
          <li>
            <span className="nbr inline">3</span>
            <p className="title-movie inline">James Bond</p>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Trending;
