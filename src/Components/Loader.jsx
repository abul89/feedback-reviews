

import React from 'react'
import spin from "../logo/giphy.gif"
function Loader ()  {
    const styles ={
        width:"100px",
        display:"block",
        margin:" auto",
        textAlign:"center"

    }
  return (
    <div><img src={spin} style={styles} alt="" /></div>
  )
}

export default Loader