import React, { Component } from "react";
import { motion } from "framer-motion";
import { Col, Image, Row } from "react-bootstrap";
import { robots } from "./../../widget/DataDummy";
import { CardImageComponent } from "../../widget/CardImageComponent";
import iconBack from "../../../asset/img/icons/icon-back.png";
import { Link } from "react-router-dom";
import { dbFirebase } from "../../../services/Firebase";

class DetailComponent extends Component {
  constructor(props) {
    super(props);
    this.pageVariants = {
      in: {
        opacity: 1,
      },
      out: {
        opacity: 0,
      },
    };
    this.pageTranstition = {
      duration: 2,
    };

    this.items = robots.map((items) => <CardImageComponent />);

    this.project = props.project;
    this.id = props.id;

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    dbFirebase
      .collection(this.project)
      .doc(this.id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc.data().nama_project);
          const data = doc.data();
          console.log("nama_project => ", data.nama_project);
          this.setState({ data: data });
        } else {
          console.log("No such document!");
        }
      });
  }

  render() {
    const styleHeader = { fontSize: "5em" };
    return (
      <motion.div className="p-2" initial="out" animate="in" exit="out" variants={this.pageVariants} transition={this.useStatepageTranstition} style={{ color: "whitesmoke", minHeight: "100vh" }}>
        <div>
          <Row className="justify-content-center">
            <Col sm={1} className="text-start">
              <Link to={"/"}>
                <Image src={iconBack} />
              </Link>
            </Col>
            <Col sm={10} className="text-center">
              <h1 style={styleHeader}>{this.state.data != null ? this.state.data.nama_project : ""}</h1>
            </Col>
            <Col></Col>
          </Row>
          <Row className="p-5 text-center" style={{ fontSize: "1em" }}>
            <Col md>{this.state.data != null ? this.state.data.deskripsi_project : ""}</Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col className="text-center m-2">
              <h1 style={styleHeader}>Screenshoot</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="row row-cols-1 row-cols-md-3 g-4 mt-3 mb-1">
                {this.state.data != null ? this.state.data.screenshoot_project.map((items) => <CardImageComponent />) : ""}
                {/* {this.state.data.screenshoot_project.map((items) => (
                  <CardImageComponent />
                ))} */}
              </div>
            </Col>
          </Row>
        </div>
      </motion.div>
    );
  }
}

export default DetailComponent;
