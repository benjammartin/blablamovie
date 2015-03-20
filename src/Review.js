var React = require('react');
var Tag = require('./Tag');
var ProfilePicture = require('./ProfilePicture');
var DiscoveredBy = require('./DiscoveredBy');

var style = {

};

var Review = React.createClass({
  render: function() {
    var data = this.props.data;
    return (
      <article style={style}>
        <div>
          <Tag>{data.tag}</Tag>
          <ProfilePicture url={data.author.picture} />
          <DiscoveredBy>{data.author.name}</DiscoveredBy>
          <h1>{data.title}</h1>
          <p>{data.content}</p>
        </div>
      </article>
    );
  }
});

module.exports = Review;
