var React = require('react');
var Review = require('./Review');

var left = {
  width: '70%',
  marginTop: '40px'
};

var Reviews = React.createClass({
  render: function() {
    var props = this.props;
    var reviewNodes = props.reviews.map(function (review, index) {
      return (
        <Review data={review} key={index} handleUpvote={props.handleUpvote} />
      );
    });
    return (
      <section style={left} className="inline">
        {reviewNodes}
      </section>
    );
  }
});

module.exports = Reviews;
