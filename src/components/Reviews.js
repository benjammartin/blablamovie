var React = require('react');
var Review = require('./Review');

var style = {
  float: 'left',
  width: '70%'
};

var reviews = [
  {
    author: {
      name: 'John Donald',
      picture: 'https://avatars2.githubusercontent.com/u/8003503?v=3&s=460'
    },
    content: 'At least that’s what fan-folk hope, his next movie will be an Aliens sequel. At least that\’s what fan-folk hope, his next movie will be an Aliens sequel.',
    date: 1426848754509,
    tag: 'Suicide Squad',
    title: 'Do We Already know Jared Leto\'s Joker?',
    votes: 88
  },
  {
    author: {
      name: 'John Donald',
      picture: 'https://avatars2.githubusercontent.com/u/8003503?v=3&s=460'
    },
    content: 'At least that’s what fan-folk hope, his next movie will be an Aliens sequel. At least that\’s what fan-folk hope, his next movie will be an Aliens sequel.',
    date: 1426848754509,
    tag: 'Suicide Squad',
    title: 'Do We Already know Jared Leto\'s Joker?',
    votes: 88
  }
];

var Reviews = React.createClass({
  render: function() {
    var reviewNodes = reviews.map(function (review, index) {
      return (
        <Review data={review} key={index} />
      );
    });
    return (
      <section style={style}>
        {reviewNodes}
      </section>
    );
  }
});

module.exports = Reviews;
