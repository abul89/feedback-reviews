import React from "react";
import Card from "../shared/Card";
import Header from "./Header";
import { useParams } from "react-router-dom";

const Post = () => {
    const params = useParams()
  return (
    <div>
      <Header />
      <Card reverses={true}>
        <h1>Post{params.id}</h1>
        <h2>Name{params.name}</h2>
        <h3>Testing Post</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga vel
          veritatis porro sit molestias nisi ipsum officiis est, voluptates,
          quidem perferendis enim at! Dolores sit veritatis possimus doloribus
          deserunt architecto.
        </p>

      </Card>
    </div>
  );
};

export default Post;
