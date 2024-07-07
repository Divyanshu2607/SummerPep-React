import {Component} from 'react';
import '../App.css';
class CollegeSection extends Component{
    render=()=>{
        const handleButtonClick=()=>{
            window.location.href=this.props.src;
        }
        //one way
        let hiddenbutton=null;
        if(this.props.bool_val){
        hiddenbutton= <button>
        hidden
       </button>
}
       
        return(
            <>
            <div className='comp'>
            <h1>{this.props.heading}</h1>
            <img alt="" src={this.props.image} style={{maxWidth:"400px"}}/>
            <p >{this.props.content}</p>
            <div  style={{ textAlign: "right" }}>
            <button onClick={handleButtonClick}> click</button>
            {this.props.bool_val && (
                        <button>
                            Hidden
                        </button>
                    )}
            {hiddenbutton}
            </div>
            </div>
            </>
        )
    }
}

export default CollegeSection;



// hiddenbutton=null;
// if(this.props.bool_val){
//     <button>
//         hidden
//     </button>
// }