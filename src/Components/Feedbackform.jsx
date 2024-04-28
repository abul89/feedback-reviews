import React from "react";
import Card from "../shared/Card";
import { useState, useEffect } from "react";
import Button from "./Button";
import Rating from "./Rating";
import { useContext } from "react";
import FeedbackContext from "../Context/FeebackContext";

const Feedbackform = () => {
  const [feedbackInput, setFeedbackInput] = useState("");
  const [input, setInput] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [radio, setRadio] = useState(10);

  const { addFeedback, feedbackedit,updatefeedback } = useContext(FeedbackContext);
  // console.log(feedbackedit);
  // debugger;
  useEffect(() => {
    if (feedbackedit.edit === true) {
      setBtnDisabled(false);
      setFeedbackInput(feedbackedit.item.values);
      setRadio(feedbackedit.item.radio);
    }
  }, [feedbackedit]);

  const formevent = (e) => {
    if (feedbackInput === "") {
      setBtnDisabled(true);
      //  setInput(null)
      setInput("Text should be in 10 characters");
    } else if (feedbackInput !== "" && feedbackInput.trim().length <= 10) {
      setBtnDisabled(true);
      setInput("Text should be in 10 characters");
    } else {
      setBtnDisabled(false);
      setInput(null);
    }
    setFeedbackInput(e.target.value);
  };
  // add new input radio values
  const handleSubmit = (e) => {
    e.preventDefault();

    if (feedbackInput.trim().length > 10) {
      const newFeedback = {
        values: feedbackInput,
        radio,
      };
      if (feedbackedit.edit === true){
        updatefeedback(feedbackedit.item.id,newFeedback)
      }
      else{
        addFeedback(newFeedback)
        
      }
     
      setFeedbackInput("")
      // console.log(feedbackInput , 'Added')
      // console.log(radio , 'Added')
    }
  };

  return (
    <Card reverses={false}>
      <h2 className="tile">Please rate my ratings and reviews project ?</h2>
      <form onSubmit={handleSubmit}>
        <Rating rating={(radio) => setRadio(radio)} />
        <div className="input-group">
          <input
            onChange={formevent}
            type="text"
            value={feedbackInput}
            placeholder="Write a review"
          />
          {/* <button >Send</button> */}
          <Button type="submit" version="primary" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {input && <div className="errorText">{input}</div>}
      </form>
    </Card>
  );
};

export default Feedbackform;
