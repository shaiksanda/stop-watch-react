// Write your code here
import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {timer: 0, intervalId: null}

  componentWillUnmount() {
    const {intervalId} = this.state
    if (intervalId) {
      clearInterval(intervalId)
    }
  }

  formatTime = () => {
    const {timer} = this.state
    const minutes = Math.floor(timer / 60)
    const seconds = timer % 60
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds
    return `${formattedMinutes}:${formattedSeconds}`
  }

  tick = () => {
    this.setState(prevState => ({timer: prevState.timer + 1}))
  }

  handleStart = () => {
    const {intervalId} = this.state
    if (!intervalId) {
      // Only start if no interval is running
      const newIntervalId = setInterval(this.tick, 1000)
      this.setState({intervalId: newIntervalId})
    }
  }

  handleStop = () => {
    const {intervalId} = this.state
    if (intervalId) {
      clearInterval(intervalId)
      this.setState({intervalId: null})
    }
  }

  handleReset = () => {
    this.handleStop()
    this.setState({timer: 0})
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="stop-watch">Stopwatch</h1>
        <div className="timer-card">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
              alt="stopwatch"
              className="stopwatch-image"
            />
            <h1 className="stop-watch">Timer</h1>
          </div>
          <h1 className="timer">{this.formatTime()}</h1>
          <div>
            <button
              onClick={this.handleStart}
              type="button"
              style={{backgroundColor: '#1db05f'}}
            >
              Start
            </button>
            <button
              onClick={this.handleStop}
              type="button"
              style={{backgroundColor: '#ef0d36'}}
            >
              Stop
            </button>
            <button
              onClick={this.handleReset}
              type="button"
              style={{backgroundColor: '#eaa800'}}
            >
              Reset
            </button>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stopwatch-lg-bg.png"
          alt="stop watch"
          className="image"
        />
      </div>
    )
  }
}

export default StopWatch
