import React from "react";
import { useParams } from "react-router-dom";

const Lists = () => {
  const params = useParams();

  return <div>{params.name}</div>;
};

export default Lists;
