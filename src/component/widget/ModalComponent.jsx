// @flow
import { Modal } from "react-bootstrap";
import * as React from "react";

export const ModalComponent = (props) => {
  return (
    <Modal show={props.show} onHide={() => props.setShow(false)} size="xl" aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Custom Modal Styling</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam facilis doloribus debitis!
          Sit quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro quo magni incidunt dolore amet atque facilis ipsum deleniti rem!
        </p>
      </Modal.Body>
    </Modal>
  );
};
