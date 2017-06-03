var React = require('react');
var Clock = require('Clock');
var TimerControls = require('TimerControls');

var Timer = React.createClass({
  getInitialState: function(){
    return {
      count: 0,
      counting: 'stopped'
    }
  },
  componentDidUpdate: function(prevProps, prevState){
    if(this.state.counting !== prevState.counting){
      switch (this.state.counting) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count:0});
        case 'paused':
          clearInterval(this.timer)
          this.timer = 'undefined';
          break;
      }
    }
  },
  startTimer: function (){
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

    }, 1000);
  },
  handleStartCounting: function(seconds){
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },

  handleStatusUpdate: function (newStatus){
    this.setState({
      countdownStatus: newStatus
    });
  },

  render: function(){
    var {count, counting} = this.state;

    return (
      <div>
        <Clock totalSeconds={count}/>
        <TimerControls counting={counting} onStatusUpdate={this.handleStatusUpdate}/>
      </div>
    );
  }
});

module.exports = Timer;
