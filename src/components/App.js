var React = require('react/addons');
var Header = require('./Header');
var Body = require('./Body');

var style = {
  marginTop: '26px',
  paddingBottom: '26px',
  boxShadow: '0px 1px 4px 0px rgba(230, 230, 230, 0.50)'
};

var App = React.createClass({
  getInitialState: function() {
    return {
      reviews: [
        {
          author: {
            name: 'John Donald',
            picture: 'https://avatars2.githubusercontent.com/u/8003503?v=3&s=460'
          },
          content: 'At least that’s what fan-folk hope, his next movie will be an Aliens sequel. At least that\’s what fan-folk hope, his next movie will be an Aliens sequel.',
          date: 1426848754509,
          id: 0,
          tag: 'Suicide Squad',
          title: 'Do We Already know Jared Leto\'s Joker?',
          votes: 92
        },
        {
          author: {
            name: 'John Donald',
            picture: 'https://avatars2.githubusercontent.com/u/8003503?v=3&s=460'
          },
          content: 'Sony Pictures Entertainment has announced that the trailer for Adam Sandler’s “Pixels” has generated 34.3 million views worldwide in its first 24 hours online. It’s a record for a Sony movie, 50%…',
          date: 1426848754510,
          id: 1,
          tag: 'Pixels',
          title: 'Adam Sandler’s ‘Pixels’ Trailer Gets Record 34 Million Views',
          votes: 90
        },
        {
          author: {
            name: 'John Donald',
            picture: 'https://avatars2.githubusercontent.com/u/8003503?v=3&s=460'
          },
          content: 'Marvel has delivered a new TV spot for “Avengers: Age of Ultron” that will be seen during the NCAA tournament. The latest trailer continues to up the ante with a slew of new set pieces that are sure…',
          date: 1426848754511,
          id: 2,
          tag: 'Avengers',
          title: 'New‘s Avengers: Age of Ultron’ TV Spot',
          votes: 88
        }
      ]
    };
  },
  render: function() {
    return (
      <div>
        <div style={style}>
          <Header />
        </div>

        <Body reviews={this.state.reviews} handleUpvote={this.handleUpvote} />
      </div>
    );
  },
  handleUpvote: function(id) {
    this.setState({
      reviews: this.state.reviews.map(function (review) {
        return {
          author: {
            name: review.author.name,
            picture: review.author.picture
          },
          content: review.content,
          date: review.date,
          id: review.id,
          tag: review.tag,
          title: review.title,
          votes: review.id === id ? review.votes + 1 : review.votes
        };
      })
    });
  }
});

module.exports = App;
