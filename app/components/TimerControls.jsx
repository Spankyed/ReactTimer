var React = require('react');

var TimerControls = React.createClass({
  // getInitialState: function(){
  //     counting: stopped
  // },

  //neccesary?
  propTypes:{
    counting: React.PropTypes.string.isRequired,
    onStatusUpdate: React.PropTypes.func.isRequired,
  },
  onStatusUpdate: function (newStatus){
    return () => {
      this.props.onStatusUpdate(newStatus);
    }
  },
  render: function (){
    var {counting} = this.props;
    var renderStartStopButton = () =>{
      if(counting === 'started'){
        return <button className="button secondary" onClick={this.onStatusUpdate('paused')}>Pause</button>
      } else if (counting === 'paused' || counting === 'stopped') {
        return <button className="button primary" onClick={this.onStatusUpdate('started')}>Start</button>
      }
    };

    return(
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusUpdate('stopped')}>Clear</button>
      </div>
    )
  }

});

module.exports = TimerControls;
