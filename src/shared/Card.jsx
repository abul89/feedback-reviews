import React from "react";
import PropTypes from "prop-types";

const Card = ({ children, reverses }) => {
  return (
    // reverses is a variable la reverse iruka paru irundha reverse illana card
    // <>
    //   <div className={reverses ? "reverse" : "card"}>{children}</div>
    // </>

    // <>
    //        <div className={`card ${reverses && 'reverse'}`}>{children}</div>
    // </>

     <>
       <div className='card' style={{backgroundColor:  reverses ?' rgba(0, 0, 0, 0.589)' : 'aquamarine',color : reverses ? 'red' : 'false'}}>{children}
      </div>

     </>
  );
};
Card.defaultProps = {
  reverses: true,
};
Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverses: PropTypes.bool,
};
export default Card;
