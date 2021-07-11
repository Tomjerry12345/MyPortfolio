import * as React from "react";
import { Col } from "react-bootstrap";

export function IconComponent(props) {
  return (
    <Col md={2} className="text-center m-1">
      <a href={props.link}>
        <button>
          <img src={props.icon} alt={props.desc} width="60" style={{ backgroundColor: "#212129" }}></img>
        </button>
      </a>
    </Col>
  );
}
