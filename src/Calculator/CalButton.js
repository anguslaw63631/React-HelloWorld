import React from "react";
//import "../css/style.css";

class CalButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            current: "",
            previous: []
        }
    }

    render() {
        return (

            <div className={`col-${this.props.cols}`}>
                <button className="btn btn-secondary btn-lg w-100" onClick={() => this.props.action(this.props.symbol)}>{this.props.symbol}</button>
            </div>


        );
    }
}

export default CalButton