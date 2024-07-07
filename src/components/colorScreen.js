import { Component } from "react";

class colorScreen extends Component{
    state={
        colors:[],
    };
    showColorBoxes=()=>{
        let colorBox=this.state.colors.map((el)=>{
            return (
                <div 
                style={
                    {background:el ,
                    height:'100px',
                    width:'100px',
                    margin:'5px'}
                    }>
                </div>
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
                }
            }
            onClick={this.handleClick}>
               Generate Color
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