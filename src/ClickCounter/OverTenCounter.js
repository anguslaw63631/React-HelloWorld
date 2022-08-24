import React from "react";

class OverTenCount extends React.Component{

    render(){
        return(
            <div>
                {(this.props.overTen) ? (<><h3>You Clicked {this.props.overTenCount} X 10 times</h3><button onClick={()=>this.props.onReset()} >Reset</button></>) : null
                }

            </div>
        );
    }
}

export default OverTenCount;