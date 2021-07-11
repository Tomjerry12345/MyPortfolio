import React from "react";
import { Container, Row } from "react-bootstrap";
import PortfolioComponent from "./sub/PortfolioComponent";
import ProfilComponent from "./sub/ProfilComponent";

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
  }
  render() {
    return (
      <section id={this.id}>
        <div className="content">
          <Container fluid>
            <Row style={{ marginTop: "25vh" }}>
              <PortfolioComponent />
              <ProfilComponent />
            </Row>
          </Container>
        </div>
      </section>
    );
  }
}

export default HomeComponent;
