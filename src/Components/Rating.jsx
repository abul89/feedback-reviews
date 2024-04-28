import React from "react";
import { useState} from "react";
// import FeedbackContext from "../Context/FeebackContext";

const Rating = ({ rating }) => {
  // const { feedbackedit } = useContext(FeedbackContext);
  // const [Rating, setRating] = useState(10);
  // const handlechange = (e) => {
  //   setRating(+e.currentTarget.value);
  //   rating(+e.currentTarget.value);
  // };
 
  // console.log(Rating,"dqdq")
  // console.log(rating,"aa")
 const [select,setSelect] = useState(10)
 const handlechange = (e) => {
   setSelect(+e.currentTarget.value);
   rating(+e.currentTarget.value);
 }
  // useEffect(() => {
  //   setRating(feedbackedit.item.radio);
  // }, [feedbackedit]);

  return (
    <div className="rating">
      <div>
        <input
          type="radio"
          name="rating"
          value="1"
          id="num1"
          onChange={handlechange}
          checked={select === 1}
        />
        <label htmlFor="num1">1</label>
      </div>
      <div>
        <input
          type="radio"
          name="rating"
          value="2"
          id="num2"
          onChange={handlechange}
          checked={select === 2}
        />
        <label htmlFor="num2">2</label>
      </div>
      <div>
        <input
          type="radio"
          name="rating"
          value="3"
          id="num3"
          onChange={handlechange}
          checked={select === 3}
        />
        <label htmlFor="num3">3</label>
      </div>
      <div>
        <input
          type="radio"
          name="rating"
          value="4"
          id="num4"
          onChange={handlechange}
          checked={select === 4}
        />
        <label htmlFor="num4">4</label>
      </div>
      <div>
        <input
          type="radio"
          name="rating"
          value="5"
          id="num5"
          onChange={handlechange}
          checked={select === 5}
        />
        <label htmlFor="num5">5</label>
      </div>
      <div>
        <input
          type="radio"
          name="rating"
          value="6"
          id="num6"
          onChange={handlechange}
          checked={select === 6}
        />
        <label htmlFor="num6">6</label>
      </div>
      <div>
        <input
          type="radio"
          name="rating"
          value="7"
          id="num7"
          onChange={handlechange}
          checked={select === 7}
        />
        <label htmlFor="num7">7</label>
      </div>
      <div>
        <input
          type="radio"
          name="rating"
          value="8"
          id="num8"
          onChange={handlechange}
          checked={select === 8}
        />
        <label htmlFor="num8">8</label>
      </div>
      <div>
        <input
          type="radio"
          name="rating"
          value="9"
          id="num9"
          onChange={handlechange}
          checked={select === 9}
        />
        <label htmlFor="num9">9</label>
      </div>
      <div>
        <input
          type="radio"
          name="rating"
          value="10"
          id="num10"
          onChange={handlechange}
          checked={select === 10}
        />
        <label className="ten-label" htmlFor="num10">10</label>
      </div>
    </div>
  );
};

export default Rating;
