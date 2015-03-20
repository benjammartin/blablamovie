var React = require('react');
var Tag = require('./Tag');
var ProfilePicture = require('./ProfilePicture');
var DiscoveredBy = require('./DiscoveredBy');
var UpvoteButton = require('./UpvoteButton');

var reviewStyle = {
  borderBottom: '1px solid #EDEDED',
  padding: '0 0 8px 0',
  fontWeight: '300',
  marginBottom: '50px'
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
  margin: '0 10px'
};

var text = {
  fontSize: '16px',
  lineHeight: '22px',
  color: '#747474',
  paddingBottom: '16px'
}

var Review = React.createClass({
  render: function() {
    var data = this.props.data;
    return (
      <article style={reviewStyle}>
        <Tag>{data.tag}</Tag>
        <span style={verticalSeparatorStyle}></span>
        <ProfilePicture url={data.author.picture} />
        <DiscoveredBy name={data.author.name} />
        <h1 style={headerStyle}>{data.title}</h1>
        <p style={text}>{data.content}</p>
        <UpvoteButton votes={data.votes} />
      </article>
    );
  }
});

module.exports = Review;
