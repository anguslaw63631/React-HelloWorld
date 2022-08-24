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

    onReset = ()=>{
        this.setState({
            count : 0,
            overTen : false,
            overTenCount : 0
        });
    }

    componentDidUpdate(props, state) {
        if (state.overTen === true)
            this.setState({ overTen: false });
        if (this.state.count % 10 === 0 && this.state.count > 0 && this.state.count !== state.count) {
            this.setState({ overTen: true });
            this.setState({ overTenCount: this.state.overTenCount + 1 });
            console.log("10 times Clicked Count",this.state.overTenCount +1 );
        }

        console.log("Clicked Count",this.state.count);
        
    }
    render() {
        let { count } = this.state;
        return (
            <div>
                <h2>You already click the button {count} times</h2>

                <button onClick={() => this.handleClick()}>Click Me</button>
                <OverTenCount overTen={this.state.overTen} overTenCount={this.state.overTenCount} onReset={()=>this.onReset()}/>
                
            </div>
        )
    }
}

export default ClickCounter;