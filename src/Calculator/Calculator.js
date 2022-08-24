import React from "react";
//import "../css/style.css";
import CalButton from "./CalButton";
//import "./Calcss.css";


class Calculator extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            current: '0',
            previous: [],
            nextIsReset: false
        }
    }

    reset = () => {
        this.setState({ current: '0', previous: [], nextIsReset: false });
    }

    addToCurrent = (symbol) => {
        console.log("symbol");
        if (["/", "-", "+", "*"].indexOf(symbol) > -1) {
            let { previous } = this.state;
            previous.push(this.state.current + symbol);
            this.setState({ previous, nextIsReset: true });
        } else {

            if ((this.state.current === "0" && symbol !== ".") || this.state.nextIsReset) {
                this.setState({ current: symbol, nextIsReset: false });
            } else {
                this.setState({ current: this.state.current + symbol });
            }
        }
    }

    calculate = (symbol) => {
        let { current, previous, nextIsReset } = this.state;
        if (previous.length > 0) {
            current = eval(String(previous[previous.length - 1] + current));
            this.setState({ current, previous: [], nextIsReset: true });
        }
    }

    render() {
        const buttons = [
            { symbol: 'C', cols: 9, action: this.reset},
            { symbol: '/', cols: 3, action: this.addToCurrent},
            { symbol: '7', cols: 3, action: this.addToCurrent},
            { symbol: '8', cols: 3, action: this.addToCurrent},
            { symbol: '9', cols: 3, action: this.addToCurrent},
            { symbol: '*', cols: 3, action: this.addToCurrent },
            { symbol: '4', cols: 3, action: this.addToCurrent },
            { symbol: '5', cols: 3, action: this.addToCurrent },
            { symbol: '6', cols: 3, action: this.addToCurrent},
            { symbol: '-', cols: 3, action: this.addToCurrent },
            { symbol: '1', cols: 3, action: this.addToCurrent},
            { symbol: '2', cols: 3, action: this.addToCurrent },
            { symbol: '3', cols: 3, action: this.addToCurrent},
            { symbol: '+', cols: 3, action: this.addToCurrent },
            { symbol: '0', cols: 6, action: this.addToCurrent},
            { symbol: '.', cols: 3, action: this.addToCurrent},
            { symbol: '=', cols: 3, action: this.calculate},
        ];

        return (
            <div className="App">
                <div className="row">
                    <div className="col-6">
                        {this.state.previous.length > 0 ? <input className="input-group-text w-100" type="text" disabled="disabled" value={this.state.previous[this.state.previous.length - 1]} /> : <input className="input-group-text w-100" type="text" disabled="disabled" />}
                    </div>
                    <div className="col-6">
                        <input className="input-group-text w-100" type="text" value={this.state.current} />
                    </div>
                </div>
                <div className="row">
                    {/* {buttons.map((btn, i) => {
                        

                        return <CalButton key={i} symbol={btn.symbol} cols={btn.cols} action={(symbol) => btn.action(symbol)} />


                    })} */}
                
                    <div className="row mt-3">
                    <CalButton symbol={buttons[0].symbol} cols={buttons[0].cols} action={buttons[0].action} />
                    <CalButton symbol={buttons[1].symbol} cols={buttons[1].cols} action={buttons[1].action} />
                    </div>
                    <div className="row mt-3">
                    <CalButton symbol={buttons[2].symbol} cols={buttons[2].cols} action={buttons[2].action} />
                    <CalButton symbol={buttons[3].symbol} cols={buttons[3].cols} action={buttons[3].action} />
                    <CalButton symbol={buttons[4].symbol} cols={buttons[4].cols} action={buttons[4].action} />
                    <CalButton symbol={buttons[5].symbol} cols={buttons[5].cols} action={buttons[5].action} />
                    </div>
                    <div className="row mt-3">
                    <CalButton symbol={buttons[6].symbol} cols={buttons[6].cols} action={buttons[6].action} />
                    <CalButton symbol={buttons[7].symbol} cols={buttons[7].cols} action={buttons[7].action} />
                    <CalButton symbol={buttons[8].symbol} cols={buttons[8].cols} action={buttons[8].action} />
                    <CalButton symbol={buttons[9].symbol} cols={buttons[9].cols} action={buttons[9].action} />
                    </div>
                    <div className="row mt-3">
                    <CalButton symbol={buttons[10].symbol} cols={buttons[10].cols} action={buttons[10].action} />
                    <CalButton symbol={buttons[11].symbol} cols={buttons[11].cols} action={buttons[11].action} />
                    <CalButton symbol={buttons[12].symbol} cols={buttons[12].cols} action={buttons[12].action} />
                    <CalButton symbol={buttons[13].symbol} cols={buttons[13].cols} action={buttons[13].action} />
                    </div>
                    <div className="row mt-3">
                    <CalButton symbol={buttons[14].symbol} cols={buttons[14].cols} action={buttons[14].action} />
                    <CalButton symbol={buttons[15].symbol} cols={buttons[15].cols} action={buttons[15].action} />
                    <CalButton symbol={buttons[16].symbol} cols={buttons[16].cols} action={buttons[16].action} />

                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator