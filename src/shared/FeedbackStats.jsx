import React from 'react'

import { useContext } from 'react'
import FeedbackContext from '../Context/FeebackContext'
// const FeedbackStats = ({lengths}) => {
  const FeedbackStats = () => {
  const {itemsfromfeedback}  = useContext(FeedbackContext)
  // console.log(lengths)
  const average = itemsfromfeedback.reduce((acc ,cur) => {
    // console.log("---acc--",acc)
    // console.log("---cur--",cur)
    return acc + cur.radio  
  },0)  /itemsfromfeedback.length

  // const average = itemsfromfeedback.reduce((acc, cur) => acc + cur.radio, 0) / itemsfromfeedback.length;


  const formatAverage = average.toFixed(1).replace(/\.0$/, '')

  const flex ={
    display: 'flex',
    justifyContent: 'space-around',
  }
  return (

    <div className='' style={flex}>
      <h3>{`Total Reviews : ${itemsfromfeedback.length}`}</h3>
      <h3>{`Average Reviews : ${isNaN(formatAverage) ? 0 : formatAverage}`}</h3>
    </div>
  )
}

export default FeedbackStats