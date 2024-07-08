import { useEffect } from "react"
const ColorBox=(props)=>{
    useEffect(()=>{
        console.log("Color Box is created")
        return (
            ()=>{
            console.log("Color Box is removed")
            }
        )
    },[])
    return(
        <>
         <div 
            style={
                {background:props.color ,
                height:'100px',
                width:'100px',
                margin:'5px'}
                }>
                    <button onClick={props.onButtonClick}>Click Me</button>
            </div>
            
        </>
    )
}


export default ColorBox;