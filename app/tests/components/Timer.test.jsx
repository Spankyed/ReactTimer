var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  it('should start timer on started status', (done) =>{
    var timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.handleStatusUpdate('started');
    expect(timer.state.count).toBe(0);
    expect(timer.state.timerStatus).toBe('started');

    setTimeout(()=>{
      expect(timer.state.count).toBe(1);
      done();
    }, 1001);
  });

  it('should pause timer on pause status', (done) =>{
    var timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.setState({count: 10})
    timer.handleStatusUpdate('started');
    timer.handleStatusUpdate('paused');
    expect(timer.state.count).toBe(10);
    expect(timer.state.timerStatus).toBe('paused');

    setTimeout(()=>{
      expect(timer.state.count).toBe(10);
      done();
    }, 2001);
  });
  it('should stop timer on stop status', (done) =>{
    var timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.setState({count: 10})
    timer.handleStatusUpdate('started');
    timer.handleStatusUpdate('stopped');
    expect(timer.state.count).toBe(0);
    expect(timer.state.timerStatus).toBe('stopped');

    setTimeout(()=>{
      expect(timer.state.count).toBe(0);
      done();
    }, 2001);
  });

});
