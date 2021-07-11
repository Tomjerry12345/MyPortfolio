// @flow
import * as React from "react";
import { styleButton } from "../../utils/Constant";

export const ButtonComponent = (props) => {
  return (
    <div className="col-4">
      <a href={props.id}>
        <button className="p-3 myButton" style={{ ...styleButton, width: "22vh" }}>
          {props.title}
        </button>
      </a>
    </div>
  );
};
