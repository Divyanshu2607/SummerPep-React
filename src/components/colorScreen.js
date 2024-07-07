import { Component } from "react";
import ColorBox from "./ColorBox";

class colorScreen extends Component{
    state={
        colors:[],
    };
   
    showColorBoxes=()=>{
        let colorBox=this.state.colors.map((el)=>{
            return (
               <ColorBox color={el}/>
            )
        })
        return colorBox;
    }
     handleClick=()=>{
        const newColor=this.generateColor();
        this.setState({colors:[...this.state.colors,newColor]});
    }
     generateColor=()=>{
        return `rgb(${this.generateRandom()},${this.generateRandom()},${this.generateRandom()})`;
    }
    
    generateRandom=()=>{
        return Math.floor(Math.random()*256);
    }
  componentDidUpdate=()=>{
    console.log("color screen get updated")
  }
    render(){
        return(
            <>
            <h1>Color:{this.state.colors.length}</h1>
            <button 
            style={
                {
                    borderRadius:"30px",
                    padding:"5px 15px",
                    border:"0",
                    color:"white",
                    background:"black",
                    marginRight:"10px",
                }
            }
            onClick={this.handleClick}>
               Generate Color
            </button>
            <button 
            style={
                {
                    borderRadius:"30px",
                    padding:"5px 15px",
                    border:"0",
                    color:"white",
                    background:"black",
                }
            }
            onClick={()=>{
                let arr=this.state.colors;
                arr.pop();
                this.setState({colors:arr})
            }}>
               Delete Color
            </button>
            <div style={{
                display:"grid",
                gridTemplateColumns:"repeat(3,1fr)"
            }}>
                {this.showColorBoxes()}
            </div>
            </>
        )
    }
}

export default colorScreen;