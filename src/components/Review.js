var React = require('react');
var Tag = require('./Tag');
var ProfilePicture = require('./ProfilePicture');
var DiscoveredBy = require('./DiscoveredBy');

var reviewStyle = {

};

var headerStyle = {
  padding:'16px 0 9px'
};

var Review = React.createClass({
  render: function() {
    var data = this.props.data;
    return (
      <article style={reviewStyle}>
        <div>
          <Tag>{data.tag}</Tag>
          <ProfilePicture url={data.author.picture} />
          <DiscoveredBy>{data.author.name}</DiscoveredBy>
          <h1 style={headerStyle}>{data.title}</h1>
          <p>{data.content}</p>
        </div>
      </article>
    );
  }
});

module.exports = Review;