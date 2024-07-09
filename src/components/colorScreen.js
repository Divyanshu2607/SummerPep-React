
import ColorBox from "./ColorBox";
import { useState } from "react";
import { useEffect } from "react";
const ColorScreen=()=>{
  const [state,setState]=useState({colors:[]})
  const [headerInfo,setHeaderInfo]=useState({color:'black' ,boxClicked:null})
  useEffect(()=>{
    console.log("Color Screen is updated")
  })
   const showColorBoxes=()=>{
        let colorBox=state.colors.map((el,ind)=>{
            return (
               <ColorBox color={el} key={ind}
                onButtonClick={()=>{
                onButtonClick(el,ind+1)
               }}
               />
            )
        })
        return colorBox;
    }
   const  handleClick=()=>{
        const newColor=generateColor();
        setState({colors:[...state.colors,newColor]});
    }
    const onButtonClick=(color,boxNumber)=>{
        setHeaderInfo({color:color,boxClicked:boxNumber})
    }
  const   generateColor=()=>{
        return `rgb(${generateRandom()},${generateRandom()},${generateRandom()})`;
    }
  const  generateRandom=()=>{
        return Math.floor(Math.random()*256);
    }
    return(
        <>
        <h1 style={{color:headerInfo.color
        }}>Color:{state.colors.length} &nbsp;//for space
        {headerInfo.boxClicked && <span style={{fontSize:'1rem'}}>
            boxClicked:{headerInfo.boxClicked}
            </span>}
        </h1>
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
        onClick={handleClick}>
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
            let arr=state.colors;
            arr.pop();
            setState({colors:arr})
        }}>
           Delete Color
        </button>
        <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(5,1fr)"
        }}>
            {showColorBoxes()}
        </div>
        </>
    )
}

export default ColorScreen;