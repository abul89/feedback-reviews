import React from "react";
import Card from "../shared/Card";
import Header from "./Header";

// import { v4 as uuidv4 } from "uuid";

const About = () => {
//   const id = uuidv4(); 

  return (
    <div>
    <Header/>
      <Card reverses={false}>
        <h1>About us</h1>
        <ul>
          <li>React JS is used in the development of the ratings and reviews project.</li>
          <li>It's easy for users to rate and review this project. </li>
          <li>The user can change the reviews, ratings, and previews in addition to deleting them.</li>
          <li>Using hooks, we developed an API to link PostMan to a data storage system.</li>
          <li>Concepts like hooks, properties, routing, etc. are used in this project.</li>
        </ul>
       
      
      </Card>
    </div>
  );
};

export default About;
