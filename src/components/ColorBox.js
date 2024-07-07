import { Component } from "react";

class ColorBox extends Component{
    componentDidMount=()=>{
        console.log("ColorBox is created ")
    }
    componentWillUnmount=()=>{
        console.log("ColorBox get deleted")
    }
    render=()=>{
        return(
            <>
             <div 
                style={
                    {background:this.props.color ,
                    height:'100px',
                    width:'100px',
                    margin:'5px'}
                    }>
                </div>
            </>
        )
    }
}

export default ColorBox;