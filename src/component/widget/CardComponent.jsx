// @flow
import { React } from "react";
import computerImage from "./../../asset/img/thumb/computer.jpg";
import { styleButton } from "../../utils/Constant";
import { CardDeck, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function CardComponent(props) {
  const tanggal = new Date(props.items.tanggal_project.toDate()).toLocaleString("en-US");
  return (
    <CardDeck style={{ color: "black" }}>
      <Card style={{ backgroundColor: "#212129", border: "1px solid rgb(80, 78, 78)", color: "white" }}>
        <Card.Img variant="top" src={computerImage} />
        <Card.Body>
          <Card.Title className="fs-3">{props.items.nama_project}</Card.Title>
          <Card.Text className="fs-5">{props.items.deskripsi_singkat}</Card.Text>
          <div className="text-center">
            <Link to={`/detail/${props.project}/${props.items.id}`}>
              <Button className="p-3 btnAboutMe mt-4 mb-4" style={styleButton}>
                Detail Project
              </Button>
            </Link>
          </div>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "#C4C4C4", color: "black", fontFamily: "Red Hat Display" }}>
          <small className="fs-5">{tanggal}</small>
        </Card.Footer>
      </Card>
    </CardDeck>
  );
}
