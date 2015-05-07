var React = require('react');

var HelloWorld = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    };
  },
  _clickHandler: function() {
    var i = this.state.count+1;
    this.setState({count:i});
  },
  render: function() {
    return (
      <div onClick={this._clickHandler}>
        <p>{this.state.count}</p>
      </div>
    );
  }
});

module.exports = HelloWorld;