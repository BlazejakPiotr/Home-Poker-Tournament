import { useEffect, useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";

export default function AddBreak() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" className="w-100 mb-2" onClick={handleShow}>
        Add Break
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new break</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Form onSubmit={addRound}>
            <Form.Group as={Row} className=" mb-3" controlId="name">
              <Form.Label column sm="3">
                Name:
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  value={tournament.rounds.name}
                  onChange={(e) => handleInput(e, "name")}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className=" mb-3" controlId="duration">
              <Form.Label column sm="3">
                Duration:
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="number"
                  placeholder="20 min"
                  value={tournament.rounds.duration}
                  onChange={(e) => handleInput(e, "duration")}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className=" mb-3" controlId="duration">
              <Form.Label column sm="3">
                Blinds:
              </Form.Label>
              <Col sm="3">
                <Form.Control
                  type="number"
                  placeholder="Ante"
                  value={tournament.rounds.ante}
                  onChange={(e) => handleInput(e, "ante")}
                  required
                />
              </Col>
              <Col sm="3">
                <Form.Control
                  type="number"
                  placeholder="Small Blind"
                  value={tournament.rounds.small}
                  onChange={(e) => handleInput(e, "small")}
                  required
                />
              </Col>
              <Col sm="3">
                <Form.Control
                  type="number"
                  placeholder="Big Blind"
                  value={tournament.rounds.big}
                  onChange={(e) => handleInput(e, "big")}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group className="mb-3" controlId="chipup">
              <Form.Check type="checkbox" label="Chip up" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Add Round
            </Button>
          </Form> */}
        </Modal.Body>
      </Modal>
    </>
  );
}
