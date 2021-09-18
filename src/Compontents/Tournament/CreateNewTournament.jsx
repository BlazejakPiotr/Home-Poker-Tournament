import { useState } from "react";
import { Row, Col, Button, Modal, Form } from "react-bootstrap";

export default function CreateNewTournament() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [tournament, setTournament] = useState({
    name: "",
    description: "",
    date: "",
    gametype: "Texas Hold'em",
    pottype: "No Limit",
    format: "Regular, No rebuys",
    buyin: "",
    currency: "USD",
  });

  const handleInput = (e, propertyName) => {
    setTournament({
      ...tournament,
      [propertyName]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("", {
        method: "POST",
        body: JSON.stringify(tournament),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        alert("Created");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create New Tournament
      </Button>

      <Modal
        // size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New tournament</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} className="px-2">
            <Form.Group as={Row} className=" mb-3" controlId="name">
              <Form.Label column sm="3">
                Name:
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  placeholder="Home Game Tournament"
                  value={tournament.name}
                  onChange={(e) => handleInput(e, "name")}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="description">
              <Form.Label column sm="3">
                Description:
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  as="textarea"
                  placeholder="Notes"
                  rows={3}
                  description
                  value={tournament.description}
                  onChange={(e) => handleInput(e, "description")}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className=" mb-3" controlId="date">
              <Form.Label column sm="3">
                When:
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="datetime-local"
                  required
                  value={tournament.date}
                  onChange={(e) => handleInput(e, "date")}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className=" mb-3" controlId="game">
              <Form.Label column sm="3">
                Game:
              </Form.Label>
              <Col sm="5">
                <Form.Select
                  aria-label="game-type"
                  required
                  value={tournament.gametype}
                  onChange={(e) => handleInput(e, "gametype")}
                >
                  <option value="Texas Hold'em">Texas Hold'em</option>
                </Form.Select>
              </Col>

              <Col sm="4">
                <Form.Select
                  aria-label="pot-type"
                  required
                  value={tournament.pottype}
                  onChange={(e) => handleInput(e, "pottype")}
                >
                  <option value="No Limit">No Limit</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className=" mb-3" controlId="format">
              <Form.Label column sm="3">
                Format:
              </Form.Label>
              <Col sm="9">
                <Form.Select
                  aria-label="format"
                  required
                  value={tournament.format}
                  onChange={(e) => handleInput(e, "format")}
                >
                  <option value="Regular, No rebuys">Regular, No rebuys</option>
                  <option value="Regular, 1 rebuy">Regular, 1 rebuy</option>
                  <option value="Regular, 2 rebuys">Regular, 2 rebuys</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className=" mb-3" controlId="buyin">
              <Form.Label column sm="3">
                Buy-in:
              </Form.Label>
              <Col sm="5">
                <Form.Control
                  type="number"
                  placeholder="100"
                  required
                  value={tournament.buyin}
                  onChange={(e) => handleInput(e, "buyin")}
                />
              </Col>
              <Col sm="4">
                <Form.Select
                  aria-label="currency"
                  required
                  value={tournament.currency}
                  onChange={(e) => handleInput(e, "currency")}
                >
                  <option value="USD">USD</option>
                  <option value="GBP">GBP</option>
                  <option value="EUR">EUR</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Button type="submit" variant="primary">
              Create
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
