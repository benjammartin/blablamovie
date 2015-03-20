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
          votes: 88
        },
        {
          author: {
            name: 'John Donald',
            picture: 'https://avatars2.githubusercontent.com/u/8003503?v=3&s=460'
          },
          content: 'At least that’s what fan-folk hope, his next movie will be an Aliens sequel. At least that\’s what fan-folk hope, his next movie will be an Aliens sequel.',
          date: 1426848754509,
          id: 1,
          tag: 'Suicide Squad',
          title: 'Do We Already know Jared Leto\'s Joker?',
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
    var votes = ++this.state.reviews[id].votes;
    var reviews = React.addons.update(this.state.reviews, {
      [id]: { votes: { $set: votes } }
    });
    this.setState({
      reviews: reviews
    });
  }
});

module.exports = App;
