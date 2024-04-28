
import Card from "../shared/Card";
import { IoClose } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../Context/FeebackContext";


// pass the handleDelete function using props

const AppLevel = ({ items  }) => {

  const reviewsStyle = {
    top: "-27px",
    position: "absolute",
    margin: "20px",
    width: "50px",
    display: "inline-block",
    height: "50px",
    textAlign: "center",
    lineHeight: "50px",
    left: "-41px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    borderRadius: "50%",
    backgroundColor: "#FFFFFF",
  };
  // const btn = {
  //   width: "100px",
  //   height: "40px",
  //   border: "none",

  //   cursor: "pointer",

  //   color: "#000",
  //   fontSize: "18px",
  //   fontWeight: "bold",
  //   backgroundColor: "#FFFFFF",

  //   borderRadius: "5px",
  // };

  // compononent level onclick function
    
  // const handleDelete = (id) => {
  //   console.log(id)
  // }
const close = {
  float: "right",
  cursor: "pointer",
  paddingLeft : '10px'
}
const Edit ={
  float: "right",
  cursor: "pointer",
}
// const edit = () => {
// console.log("edited")
// }

const {deleteFeedback,editfeedback} = useContext(FeedbackContext)

// useEffect( () => {
//   console.log("deleteFeedback")
// })
  return (
    <div>
      {/* reverses using props with ternary operator */}
        <Card reverses={false}>  
        {/* <Card> */}
        <span className="reviewStyle"  style={reviewsStyle}>{items.radio}</span>
        {/* give the value function in onclick and pass the function via props */}
       {/* get the radio from data to delete  */}
        <IoClose  onClick={() => deleteFeedback(items.id)} style={close}  />
        <FaEdit onClick={() => editfeedback(items)} style={Edit} />
        <p className="reviewText">{items.values}</p>
        {/* <button style={btn}>Click</button> */}
        </Card>
      
    </div>
  );
};

export default AppLevel;
