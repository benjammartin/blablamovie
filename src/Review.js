var React = require('react');
var Tag = require('./Tag');
var ProfilePicture = require('./ProfilePicture');

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
          <h1>{data.title}</h1>
          <p>{data.content}</p>
        </div>
      </article>
    );
  }
});

// {this.props.data.author}
// {this.props.data.content}
// {this.props.data.date}
// {this.props.data.tag}
// {this.props.data.title}
// {this.props.data.votes}

module.exports = Review;
