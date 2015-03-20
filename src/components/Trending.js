var React = require('react');

var right = {
  marginTop: '50px',
  width: '100%'
};

var titleGroup = {
  position: 'relative',
  borderBottom: '1px solid #EDEDED',
  paddingBottom: '16px',
  marginBottom: '28px'
};

var title = {
  position: 'relative',
  fontSize: '13px',
  textTransform: 'uppercase',
  fontWeight: '600',
  letterSpacing: '5px'
};

var span = {
  position: 'absolute',
  fontSize: '13px',
  color: '#9B9B9B',
  letterSpacing: '5px',
  lineHeight: '16px',
  fontWeight: '300',
  right: '0'
};

var liElm = {
  marginBottom: '10px'
};

var spanElm = {
  display: 'inline-block',
  background: '#4A4A4A',
  color: '#fff',
  fontWeight: '600',
  textAlign: 'center',
  width: '40px',
  height: '40px',
  lineHeight: '40px',
  borderRadius: '2px',
  verticalAlign: 'middle'
};

var pElm = {
  verticalAlign: 'middle',
  paddingBottom: '0',
  marginLeft: '19px'
};

var Trending = React.createClass({
  render: function() {
    return (
      <div style={right} className="inline">
        <div style={titleGroup}>
          <h3 style={title}>
            Trending
            <span style={span}>All</span>
          </h3>
        </div>

        <ul>
          <li style={liElm}>
            <span className="inline" style={spanElm}>1</span>
            <p style={pElm} className="inline">Whiplash</p>
          </li>
          <li style={liElm}>
            <span className="inline" style={spanElm}>2</span>
            <p style={pElm} className="inline">Batman begins</p>
          </li>
          <li style={liElm}>
            <span className="inline" style={spanElm}>3</span>
            <p style={pElm} className="inline">James Bond</p>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Trending;
