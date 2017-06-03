var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusUpdate: React.PropTypes.func.isRequired
  },
  onStatusUpdate: function (newStatus) {
    return () => {
      this.props.onStatusUpdate(newStatus);
    }
  },
  render: function () {
    var {countdownStatus} = this.props;
    var renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className="button secondary" onClick={this.onStatusUpdate('paused')}>Pause</button>
      } else {
        return <button className="button primary" onClick={this.onStatusUpdate('started')}>Start</button>
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusUpdate('stopped')}>Clear</button>
      </div>
    )
  }
});

module.exports = Controls;
