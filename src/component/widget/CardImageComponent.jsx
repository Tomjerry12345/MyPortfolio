// @flow
import { React } from "react";
import computerImage from "./../../asset/img/thumb/computer.jpg";
import { CardDeck, Card } from "react-bootstrap";

export function CardImageComponent(props) {
  return (
    <CardDeck style={{ color: "black" }}>
      <Card style={{ backgroundColor: "#212129", border: "1px solid rgb(80, 78, 78)", color: "white" }}>
        <Card.Img variant="top" src={computerImage} />
      </Card>
    </CardDeck>
  );
}
