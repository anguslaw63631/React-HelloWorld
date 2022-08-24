import React from "react";

class OverTenCount extends React.Component{

    render(){
        return(
            <div className="componentBoarder">

                {(this.props.overTen) ? (<><h3>You Clicked {this.props.overTenCount * 10}  times</h3><button className="btn btn-danger" onClick={()=>this.props.onReset()} >Reset</button></>) : null}

            </div>
        );
    }
}

export default OverTenCount;