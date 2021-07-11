import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import iconBack from "../../asset/img/icons/icon-back.png";
import iconNext from "../../asset/img/icons/icon-next.png";
import { CardComponent } from "../widget/CardComponent";
import { dbFirebase } from "../../services/Firebase";

const NextComponent = (props) => {
  return props.id != null ? (
    <>
      <Col md={8} className="pt-3 text-end">
        <h2 className="fs-3">Next To {props.nextTitle}</h2>
      </Col>

      <Col md={1} className="text-end">
        <a href={props.id}>
          <img className="img-fluid" src={props.image} alt="icon-next"></img>
        </a>
      </Col>
    </>
  ) : null;
};

class MyPortfolioComponent extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.title = props.title;
    this.beforeId = props.beforeId;
    this.nextId = props.nextId;
    this.nextTitle = props.nextTitle;
    this.items = props.listItem;
    if (this.nextId != null) {
      this.titlePage = "My Project";
      this.elementTitlePage = <h2 className="mt-5 fs-3">{this.title}</h2>;
    } else {
      this.titlePage = "My Sertifikat";
    }

    this.state = {
      myProject: null,
    };
  }

  componentDidMount() {
    console.log("Portfolio Component");

    // dbFirebase
    //   .collection(this.id)
    //   .get()
    //   .then((snapshot) => {
    //     const myProjectData = [];
    //     snapshot.forEach((doc) => {
    //       const data = doc.data();
    //       const id = doc.id;
    //       console.log(id);
    //       myProjectData.push(data);
    //     });
    //     this.setState({ myProject: myProjectData });
    //   });

    dbFirebase.collection(this.id).onSnapshot((snapshot) => {
      const myProjectData = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        console.log(data);
        myProjectData.push(data);
      });
      this.setState({ myProject: myProjectData });
    });

    // dbFirebase
    //   .collection(this.id)
    //   .doc("q4fSuO21joXZFs5JXEB9")
    //   .get()
    //   .then((doc) => {
    //     if (doc.exists) {
    //       console.log("Document data:", doc.data());
    //       console.log("Nama project: ", doc.data().nama_project);
    //     } else {
    //       // doc.data() will be undefined in this case
    //       console.log("No such document!");
    //     }
    //   });
  }

  render() {
    return (
      <section id={this.id} style={{ padding: "2rem" }}>
        <div className="content">
          <Container fluid>
            <Row>
              <Col md={1} className="text-start">
                <a href={this.beforeId}>
                  <img className="img-fluid" src={iconBack} alt="icon-back"></img>
                </a>
              </Col>

              <Col md={2} className="text-start pt-4">
                <h2 className="fs-1">{this.titlePage}</h2>
              </Col>

              <NextComponent id={this.nextId} image={iconNext} nextTitle={this.nextTitle} />
              {this.elementTitlePage}
              <div className="row row-cols-1 row-cols-md-3 g-4 mt-3 mb-1">{this.state.myProject && this.state.myProject.map((items) => <CardComponent items={items} project={this.id} />)}</div>
            </Row>
          </Container>
        </div>
      </section>
    );
  }
}

export default MyPortfolioComponent;
