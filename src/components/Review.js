var React = require('react');
var Tag = require('./Tag');
var ProfilePicture = require('./ProfilePicture');
var DiscoveredBy = require('./DiscoveredBy');
var UpvoteButton = require('./UpvoteButton');

var Review = React.createClass({
  render: function() {
    var data = this.props.data;
    return (
      <article className="post-card">
        <header className="header-info">
          <Tag>{data.tag}</Tag>
          <ProfilePicture url={data.author.picture} />
          <DiscoveredBy name={data.author.name} />
        </header>

        <div className="post-content">
          <h2>{data.title}</h2>
          <p>{data.content}</p>
        </div>

        <UpvoteButton id={data.id} votes={data.votes} handleUpvote={this.props.handleUpvote} />
      </article>
    );
  }
});

module.exports = Review;
