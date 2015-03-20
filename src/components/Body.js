var React = require('react');
var Filters = require('./Filters');
var Reviews = require('./Reviews');
var Trending = require('./Trending');

var left = {
  width: '60%',
  marginRight: '40px'
}

var right = {
  width: '32%'
}

var Body = React.createClass({
  getInitialState: function() {
    return {
      filter: 'Top'
    };
  },
  render: function() {
    var reviews = this.props.reviews.sort(this.state.filter === 'Latest' ?
      function (a, b) {
        return a.date < b.date;
      } :
      function (a, b) {
        return a.votes < b.votes;
      }
    );
    return (
      <div className="grid">
        <div style={left} className="inline">
          <Filters filter={this.state.filter} handleFilter={this.handleFilter} />
          <Reviews reviews={reviews} handleUpvote={this.props.handleUpvote} />
        </div>

        <div style={right} className="inline">
          <Trending />
        </div>
      </div>
    );
  },
  handleFilter: function(type) {
    this.setState({
      filter: type
    });
  }
});

module.exports = Body;
