var React = require('react');
var Review = require('./Review');

var Reviews = React.createClass({
  render: function() {
    var props = this.props;
    var reviewNodes = props.reviews.map(function (review) {
      return (
        <Review data={review} key={review.id} handleUpvote={props.handleUpvote} />
      );
    });
    return (
      <section className="inline">
        <h2 className="timeline-date">Today, <span className="sub-date">March 16th</span></h2>
        {reviewNodes}
      </section>
    );
  }
});

module.exports = Reviews;
