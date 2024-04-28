import React from "react";
import AppLevel from "./AppLevel";
import FeedbackContext from "../Context/FeebackContext";
import { useContext } from "react";
import Loader from "./Loader";

const nofeedback ={
  textAlign: 'center',
  fontWeight: '900',
  color: 'white',
  fontSize: '30px',
  textTransform: 'capitalize'
}

const ConnectingProps = () => {
  const {itemsfromfeedback,isLoading}  = useContext(FeedbackContext)

  // console.log(itemsfromfeedback,"--connecting--")

  if (!isLoading &&(!itemsfromfeedback || itemsfromfeedback.length === 0)) {
  
    return <p style={nofeedback}>no feedback</p>;
  }
return isLoading ?(
  <Loader/>

) : (

  <div>
      {itemsfromfeedback.map((item, k) => (
     
        <AppLevel key={k} items={item}  />
      ))}
 
    </div>
)
  // console.log(typeof(setFeedbackitems))
  // console.log(typeof(itemsfromfeedback))
  // console.log(itemsfromfeedback)
  // debugger;
  
};

export default ConnectingProps;
