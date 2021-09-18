import { useEffect, useState } from "react";
import { Row, Col, Button, Modal, Form } from "react-bootstrap";

export default function CreateNewTournament(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [tournament, setTournament] = useState({
    name: "",
    description: "",
    date: "",
    gametype: "Texas Hold'em",
    pottype: "No Limit",
    currency: "",
    buyin: "",
    chips: "",
    rebuy: "",
    rebuyfee: "",
    rebuychips: "",
    rebuymax: "",
    rebuylast: "",
    rounds: [],
  });

  const getID = async () => {
    try {
      let response = await fetch("http://localhost:3001/tournaments/");

      if (response.ok) {
        let tournaments = await response.json();
        console.log(tournaments[tournaments.length - 1].id);
      }
    } catch (error) {}
  };

  const handleInput = (e, propertyName) => {
    setTournament({
      ...tournament,
      [propertyName]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("http://localhost:3001/tournaments/", {
        method: "POST",
        body: JSON.stringify(tournament),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        await getID();
        alert("Created");
        props.Toggle();
        handleClose();
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

            <Button type="submit" variant="success">
              Create
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
