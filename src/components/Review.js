var React = require('react');
var Tag = require('./Tag');
var ProfilePicture = require('./ProfilePicture');
var DiscoveredBy = require('./DiscoveredBy');
var UpvoteButton = require('./UpvoteButton');

var reviewStyle = {
  borderBottom: '1px solid #EDEDED',
  padding: '10px 0 5px 0',
  fontWeight: '300'
};

var headerStyle = {
    padding: '16px 0 9px',
    fontSize: '22px',
    color: '#333333',
    fontWeight: '900',
};

var verticalSeparatorStyle = {
  borderLeft: '1px solid #EDEDED',
  height: '100%',
  margin: '0 5px'
};

var Review = React.createClass({
  render: function() {
    var data = this.props.data;
    return (
      <article style={reviewStyle}>
        <Tag>{data.tag}</Tag>
        <ProfilePicture url={data.author.picture} />
        <span style={verticalSeparatorStyle}></span>
        <DiscoveredBy name={data.author.name} />
        <h1 style={headerStyle}>{data.title}</h1>
        <p>{data.content}</p>
        <UpvoteButton votes={data.votes} />
      </article>
    );
  }
});

module.exports = Review;
