var React = require('react');
var Review = require('./Review');

var left = {
  width: '70%',
  marginTop: '40px'
};

var date = {
  marginTop: '14px',
  fontSize: '24px',
  color: '#000000',
  marginBottom: '40px'
};

var subDate = {
  fontSize: '16px',
  fontWeight: '300',
  color: '#9C9C9C'
};

var Reviews = React.createClass({
  render: function() {
    var props = this.props;
    var reviewNodes = props.reviews.map(function (review) {
      return (
        <Review data={review} key={review.id} handleUpvote={props.handleUpvote} />
      );
    });
    return (
      <section style={left} className="inline">
        <h2 style={date}>Today, <span style={subDate}>March 16th</span></h2>
        {reviewNodes}
      </section>
    );
  }
});

module.exports = Reviews;
