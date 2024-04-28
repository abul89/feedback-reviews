import React from "react";
import { useState } from "react";
import Header from "./Header";

const ComponentLevel = () => {
  const [counter, setCounter] = useState(10);
  const Increment = () => {
    setCounter(counter + 1);
  };

  const Decrement = () => {
    setCounter(counter - 1);
  };

  // Feedback Ui
  const title1 = "Increment & Decrement";
  const title2 = "Feedback";
  const textCenter = {
    textAlign: "center",
  };
  
const [feedback ,seFeedback] = useState('hello world');
const borders  ={
  background: 'aquamarine',
  padding: '35px',
  margin: '0 110px',
  borderRadius: '14px',
  position : 'relative',
  
}
const [reviews,setReviews] = useState(10)

const reviewsStyle ={
  top: '-27px',
  position: 'absolute',
  padding:' 15px 17px 15px 17px',
  left: '-19px',
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  borderRadius: '50%',
  backgroundColor: '#FFFFFF',
}
const reviewssStyle ={
  
  // padding:' 15px 17px 15px 17px',
  margin:'20px',
  width: '50px',
    display: 'inline-block',
    height: '50px',
    textAlign: 'center',
    lineHeight: '50px',
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  borderRadius: '50%',
  backgroundColor: '#FFFFFF',
}
const feedbackbtn = () =>{
  seFeedback('Welcome to Feeback review')
  setReviews(reviews +1)
}
const btn ={
  width: '115px',
  height: '40px',
  border: 'none',
 
  cursor: 'pointer',
  
  color: '#000',
  fontSize: '18px',
  fontWeight: 'bold',
  backgroundColor: '#FFFFFF',

  borderRadius: '5px',
 
  
}

  return (
    <div  >
      <Header/>
      <h1 style={textCenter}>{title1}</h1>
      <div style={textCenter} >
      <button style={btn} onClick={Increment}>Increment</button>
      <span style={reviewssStyle}>{counter}</span>
      <button style={btn} onClick={Decrement}>Decrement</button>
      </div>
     

      <h1 style={textCenter}>{title2}</h1>

      <div style={borders}>
        <span style={reviewsStyle}>{reviews}</span>
        <p>{feedback}</p>
        <button style={btn} onClick={feedbackbtn}>Click</button>
      </div>
     
      

    </div>
  );
};

export default ComponentLevel;
