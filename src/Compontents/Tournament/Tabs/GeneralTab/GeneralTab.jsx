import { useEffect, useState } from "react";
import { Row, Col, Form, Button, Card } from "react-bootstrap";

export default function GeneralTab(props) {
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
  });

  const getTournament = async () => {
    let response = await fetch(
      "http://localhost:3001/tournaments/" + props.data
    );
    if (response.ok) {
      let settings = await response.json();
      setTournament(settings);
    }
  };
  useEffect(() => {
    console.log(tournament.buyin[1]);
    getTournament();
  }, []);

  const handleInput = (e, propertyName) => {
    setTournament({
      ...tournament,
      [propertyName]: e.target.value,
    });
  };

  const handleDelete = async () => {
    try {
      let response = await fetch(
        "http://localhost:3001/tournaments/" + props.data,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        alert("Deleted");
        props.Toggle();
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "http://localhost:3001/tournaments/" + props.data,
        {
          method: "PUT",
          body: JSON.stringify(tournament),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (response.ok) {
        alert("Modfied");
        props.Toggle();
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row className="p-3 d-flex">
          <Col md={7}>
            <Card className="mb-2">
              <Card.Header>Info</Card.Header>
              <Card.Body className="mt-3">
                <Card.Text>
                  <Form.Group as={Row} className=" mb-3 " controlId="name">
                    <Form.Label column sm="3">
                      Name:
                    </Form.Label>
                    <Col>
                      <Form.Control
                        type="text"
                        value={tournament.name}
                        onChange={(e) => handleInput(e, "name")}
                        required
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className=" mb-3" controlId="id">
                    <Form.Label column sm="3">
                      ID:
                    </Form.Label>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder={tournament.id}
                        readOnly
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="description">
                    <Form.Label column sm="3">
                      Description:
                    </Form.Label>
                    <Col>
                      <Form.Control
                        as="textarea"
                        placeholder="Notes"
                        rows={4}
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
                    <Col>
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
                    <Col>
                      <Form.Select
                        aria-label="game-type"
                        required
                        value={tournament.gametype}
                        onChange={(e) => handleInput(e, "gametype")}
                      >
                        <option value="Texas Hold'em">Texas Hold'em</option>
                      </Form.Select>
                    </Col>

                    <Col>
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
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={5}>
            <Card className="mb-2">
              <Card.Header>Buy-in</Card.Header>
              <Card.Body className="mt-3">
                <Card.Text>
                  <Form.Group as={Row} className=" mb-1" controlId="buyin">
                    <Form.Label column sm="5">
                      Fee:
                    </Form.Label>
                    <Col>
                      <Form.Control
                        type="number"
                        required
                        value={tournament.buyin}
                        onChange={(e) => handleInput(e, "buyin")}
                      />
                    </Col>

                    <Col>
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
                  <Form.Group as={Row} className=" mb-4" controlId="chips">
                    <Form.Label column sm="5">
                      Chips:
                    </Form.Label>
                    <Col>
                      <Form.Control
                        type="number"
                        placeholder="100"
                        required
                        value={tournament.chips}
                        onChange={(e) => handleInput(e, "chips")}
                      />
                    </Col>
                  </Form.Group>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="mb-2">
              <Card.Header>Re-buy</Card.Header>
              <Card.Body className="mt-3">
                <Card.Text>
                  <Form.Group as={Row} className=" mb-1" controlId="maxnum">
                    <Form.Label column sm="5">
                      Max per player:
                    </Form.Label>
                    <Col>
                      <Form.Control
                        type="number"
                        required
                        value={tournament.rebuymax}
                        onChange={(e) => handleInput(e, "rebuymax")}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className=" mb-3" controlId="lastround">
                    <Form.Label column sm="5">
                      Last round:
                    </Form.Label>
                    <Col>
                      <Form.Control
                        type="number"
                        required
                        value={tournament.rebuylast}
                        onChange={(e) => handleInput(e, "rebuylast")}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className=" mb-3" controlId="rebuyfee">
                    <Form.Label column sm="5">
                      Fee:
                    </Form.Label>
                    <Col>
                      <Form.Control
                        type="number"
                        required
                        value={tournament.rebuyfee}
                        onChange={(e) => handleInput(e, "rebuyfee")}
                      />
                    </Col>

                    <Col>
                      <Form.Select
                        disabled
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
                  <Form.Group as={Row} className=" mb-3" controlId="rebuychips">
                    <Form.Label column sm="5">
                      Chips:
                    </Form.Label>
                    <Col>
                      <Form.Control
                        type="number"
                        placeholder="100"
                        required
                        value={tournament.rebuychips}
                        onChange={(e) => handleInput(e, "rebuychips")}
                      />
                    </Col>
                  </Form.Group>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6}>
            <Button onClick={handleDelete} variant="danger">
              Delete
            </Button>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button type="submit" variant="warning">
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
