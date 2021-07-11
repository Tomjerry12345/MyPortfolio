import * as React from "react";
import { useParams } from "react-router-dom";
import DetailComponent from "../component/myportfolio/detail/DetailComponent";
export const GetParams = (p) => {
  const { project, id } = useParams();
  return <DetailComponent project={project} id={id} />;
};
