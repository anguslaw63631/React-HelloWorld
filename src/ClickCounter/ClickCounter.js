import React, { Component } from "react";

class ClickCounter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            overTen: false,
            overTenCount: 0
        }
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
    }

    componentDidUpdate(props, state) {
        if (state.overTen == true)
            this.setState({ overTen: false });
        if (this.state.count % 10 == 0 && this.state.count > 0 && this.state.count != state.count) {
            this.setState({ overTen: true });
            this.setState({ overTenCount: this.state.overTenCount + 1 });
            console.log("10 times Clicked Count",this.state.overTenCount +1 );
        }

        console.log("Clicked Count",this.state.count);
        
    }
    render() {
        let { count } = this.state;
        let { overTenCount } = this.state;
        return (
            <div>
                <h2>You already click the button {count} times</h2>

                <button onClick={() => this.handleClick()}>Click Me</button>

                {(this.state.overTen) ? <h3>You Clicked {overTenCount} X 10 times</h3> : null
                }
            </div>
        )
    }
}

export default ClickCounter;