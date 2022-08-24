import React from "react";
import OverTenCount from "./OverTenCounter";

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

    onReset = () => {
        this.setState({
            count: 0,
            overTen: false,
            overTenCount: 0
        });
    }

    componentDidUpdate(props, state) {
        if (state.overTen === true)
            this.setState({ overTen: false });
        if (this.state.count % 10 === 0 && this.state.count > 0 && this.state.count !== state.count) {
            this.setState({ overTen: true });
            this.setState({ overTenCount: this.state.overTenCount + 1 });
            console.log("10 times Clicked Count", this.state.overTenCount + 1);
        }

        console.log("Clicked Count", this.state.count);

    }
    render() {
        let { count } = this.state;
        return (
            <div className="row">
                
                <div className="col-6">
                    <h2>{count} times</h2>
                    <button className="btn btn-success" onClick={() => this.handleClick()}>Click Me</button>
                </div>

                <div className="col-6">
                    <OverTenCount overTen={this.state.overTen} overTenCount={this.state.overTenCount} onReset={() => this.onReset()} />
                </div>

            </div>
        )
    }
}

export default ClickCounter;