import React, { useState } from "react";
import MyPicture from "./../../../asset/img/thumb/my-picture.png";
import whatsappIcon from "./../../../asset/img/icons/whatsapp.svg";
import facebookIcon from "./../../../asset/img/icons/facebook.svg";
import instagramIcon from "./../../../asset/img/icons/instagram.svg";
import { IconComponent } from "../../widget/IconComponent";
import { styleButton } from "../../../utils/Constant";
import { Col, Row } from "react-bootstrap";
import { ModalComponent } from "../../widget/ModalComponent";

const ProfilComponent = () => {
  const [show, setShow] = useState(false);
  return (
    <Col md className="mt-3">
      <Row>
        <Col className="text-center">
          <img className="img-fluid rounded-3" src={MyPicture} alt="Fotoku"></img>
        </Col>
      </Row>

      <h2 className="mt-3 text-center">Andri Alfiandi</h2>
      <h2 className="text-center fs-4">Programmer</h2>

      <Row className="text-center">
        <Col>
          <button onClick={() => setShow(true)} className="p-3 btnAboutMe mt-2" style={styleButton}>
            About Me
          </button>
        </Col>
      </Row>

      <Row className="justify-content-center mt-5">
        <Col sm={2} className="text-start">
          <IconComponent link="https://wa.me/6285753845575" icon={whatsappIcon} desc="whatsapp" />
        </Col>
        <Col sm={2} className="text-start">
          <IconComponent link="https://web.facebook.com/andri.alfiandi.sang.motivator/" icon={facebookIcon} desc="facebook" />
        </Col>
        <Col sm={2} className="text-start">
          <IconComponent link="https://www.instagram.com/rock_anymous/" icon={instagramIcon} desc="facebook" />
        </Col>
      </Row>

      <ModalComponent show={show} setShow={setShow} />
    </Col>
  );
};

export default ProfilComponent;
