import React from 'react';
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
          date: new Date()
        });
      }
    render() {
        return (
            <div>
                <h2>Current Date and Time {this.state.date.toLocaleDateString()}  {this.state.date.toLocaleTimeString()}.</h2>

                <h3>Denpa 今晚食咗飯未</h3>
            </div>
        );
    }

}


export default Clock;