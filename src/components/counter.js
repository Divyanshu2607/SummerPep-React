import { Component } from "react";

class counter extends Component{
state={
    mul:6,
};
// increaseCount=()=>{
//     this.setState({count: this.state.count+1});
// }
// decreaseCount=()=>{
//     if(this.state.count>1)
//     this.setState({count: this.state.count-2});
//     else this.setState({count:0})
// }
render=()=>{
    return(
        <>
        <h1>This count is: {this.state.mul}</h1>
        {/* <button onClick={this.increaseCount}>Increase</button>
        <button onClick={this.decreaseCount}>Decrease</button> */}
        {/* <button onClick={ ()=>{
            let mul=this.state.mul;
            mul=this.props.btnonClick1(mul);
            this.setState({mul});
        }}>
            {this.props.text}
        </button> */}
        <button onClick={()=>{
            let mul=this.state.mul;
            mul=this.props.btnonClick2(mul);
            this.setState({mul});
        }}>
            {this.props.text2}
            
        </button>
        <button onClick={()=>{
            let mul=this.state.mul;
            mul=this.props.btnonClick1(mul);
            this.setState({mul});
        }}>
            {this.props.text1}
            </button>



        </>
    )
}
}
export default counter