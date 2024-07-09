
import './App.css';
import Counter from "./components/counter";
import ColorScreen from "./components/colorScreen";
import Cart from "./screen/Cart"
import LoginForm from './screen/loginForm';
const App=()=>{
  return(
    <>
    <ColorScreen/>
    <Counter text1="multiply" text2="divide" text3="square" text4="squareroot" btnonClick1={(mul)=>{
      return 2*mul;
    }} btnonClick2={(divide)=>{
        return divide/2;
    }}
    btnonClick3={(num)=>{
      return num*num;
    }}
    btnonClick4={(num)=>{
      if(Math.sqrt(num)<1)return 1;
      return  Math.sqrt(num);
    }}
    /> 
    <Cart/>
    <LoginForm/>
    </>
  ) 
 
 
}


export default App;

// import  hostelPhoto from "./images/image.png"
// import CollegeSection from "./components/CollegeSection";
// import placementPhoto from "./images/LPU-Placement.jpg";

 // return (
      
    //   <>
      
    //   {/* <div className="myContainer">
    //   <h1>Welcome to LPU</h1>
    //    <CollegeSection  heading="Hostel" content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." src="www.google.com" image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/f8/22/4f/the-bee-hostel.jpg?w=700&h=-1&s=1" bool_val={false}/>
    //    <CollegeSection  heading="Adminstration" content="this is the content" src="www.bing.com" image={hostelPhoto} bool_val={true}/>
    //    <CollegeSection  heading="Placements" content="this is the content" src="www.facebook.com/" image={placementPhoto} bool_val={false}/>
    //    </div> */}

    //    </>
    //    )
   

  


// <div className="Sabsaibada">
      // <div className="heading">
      // <h1>Welcome to LPU</h1>
      // </div>
      // <div className="parent">
      // {/* <div className="first"><h3>Hostel Para</h3></div>
      // <div className="second"><h3>Admin Para</h3></div>
      // <div className="third"><h3>Placement Para</h3></div> */}
      //   <CollegeSection name="hostel"/>
      //   <CollegeSection name="adminstration"/>
      //   <CollegeSection name="placement"/>
      // </div>
      // <Part/>
      // </div>

      // import Part from './part';