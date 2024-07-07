import { useState } from "react";

const Counter=(props)=>{
    const [state,setState]=useState({count:0})

  const  increaseCount=()=>{
    setState({count: state.count+1});
       };
   const  decreaseCount=()=>{
    if(state.count>1)
    setState({count: state.count-2});
    else setState({count:0})
};
    return(
        <>
        <h1>This count is: {state.count}</h1>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button> 
         <button onClick={ ()=>{
            let count=state.count;
            count=props.btnonClick1(count);
            setState({count});
        }}>
            {props.text1}
        </button>
        <button onClick={()=>{
            let count=state.count;
            count=props.btnonClick2(count);
            setState({count});
        }}>
            {props.text2}
            
        </button>
        <button onClick={()=>{
            let count=state.count;
            count=props.btnonClick3(count);
            setState({count});
        }}>
            {props.text3}
            </button>

            <button onClick={()=>{
            let count=state.count;
            count=props.btnonClick4(count);
            setState({count});
        }}>
            {props.text4}
            </button>



        </>
    )
}

export default Counter