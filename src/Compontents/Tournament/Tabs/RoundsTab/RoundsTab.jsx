import { useState, useEffect } from "react";
import { Row, Col, Table, ListGroup, Button, Card } from "react-bootstrap";
import AddRound from "./AddRound";
import AddBreak from "./AddBreak";
import { useParams } from "react-router";

export default function RoundsTab() {
  const params = useParams();
  const [tournament, setTournament] = useState({});
  const fetchData = async () => {
    try {
      let response = await fetch(
        "http://localhost:3001/tournaments/" + params.id
      );
      if (response.ok) {
        let data = await response.json();
        setTournament(data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Row className="p-3">
      <Col xs={9}>
        <Card className="mb-2">
          <Card.Header>
            <Row>
              {" "}
              <Col xs={3}>Level</Col>
              <Col xs={2}>Duration</Col>
              <Col xs={2}>Ante</Col>
              <Col xs={2}>Small Blind</Col>
              <Col xs={2}>Big Blind</Col>
              <Col xs={1}>up</Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Row>
                <ListGroup>
                  <ListGroup.Item action>
                    <Row>
                      <Col xs={3}>Round 1</Col>
                      <Col xs={2}>15 min</Col>
                      <Col xs={2}>0</Col>
                      <Col xs={2}>25</Col>
                      <Col xs={2}>50</Col>
                      <Col xs={1}></Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item action>
                    <Row>
                      <Col xs={3}>Round 2</Col>
                      <Col xs={2}>15 min</Col>
                      <Col xs={2}>0</Col>
                      <Col xs={2}>25</Col>
                      <Col xs={2}>50</Col>
                      <Col xs={1}></Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item action>
                    <Row>
                      <Col xs={3}>Round 3</Col>
                      <Col xs={2}>15 min</Col>
                      <Col xs={2}>0</Col>
                      <Col xs={2}>25</Col>
                      <Col xs={2}>50</Col>
                      <Col xs={1}></Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item action>
                    <Row>
                      <Col xs={3}>Round 4</Col>
                      <Col xs={2}>15 min</Col>
                      <Col xs={2}>0</Col>
                      <Col xs={2}>25</Col>
                      <Col xs={2}>50</Col>
                      <Col xs={1}></Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item action variant="warning">
                    <Row>
                      <Col xs={3}>Break 1</Col>
                      <Col xs={2}>15 min</Col>
                      <Col xs={2}>0</Col>
                      <Col xs={2}>25</Col>
                      <Col xs={2}>50</Col>
                      <Col xs={1}>UP</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item action>
                    <Row>
                      <Col xs={3}>Round 1</Col>
                      <Col xs={2}>15 min</Col>
                      <Col xs={2}>0</Col>
                      <Col xs={2}>25</Col>
                      <Col xs={2}>50</Col>
                      <Col xs={1}></Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item action>
                    <Row>
                      <Col xs={3}>Round 2</Col>
                      <Col xs={2}>15 min</Col>
                      <Col xs={2}>0</Col>
                      <Col xs={2}>25</Col>
                      <Col xs={2}>50</Col>
                      <Col xs={1}></Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item action>
                    <Row>
                      <Col xs={3}>Round 3</Col>
                      <Col xs={2}>15 min</Col>
                      <Col xs={2}>0</Col>
                      <Col xs={2}>25</Col>
                      <Col xs={2}>50</Col>
                      <Col xs={1}></Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item action>
                    <Row>
                      <Col xs={3}>Round 4</Col>
                      <Col xs={2}>15 min</Col>
                      <Col xs={2}>0</Col>
                      <Col xs={2}>25</Col>
                      <Col xs={2}>50</Col>
                      <Col xs={1}></Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item action variant="warning">
                    <Row>
                      <Col xs={3}>Break 1</Col>
                      <Col xs={2}>15 min</Col>
                      <Col xs={2}>0</Col>
                      <Col xs={2}>25</Col>
                      <Col xs={2}>50</Col>
                      <Col xs={1}>UP</Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      {/* <Col xs={9}>
        
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Level</th>
              <th>Duration</th>
              <th>Ante</th>
              <th>Small Blind</th>
              <th>Big Blind</th>
              <th>Chip up</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <3d>Round 1</3d>
              <td>15 min</td>
              <td>10</td>
              <td>25</td>
              <td>50</td>
              <td></td>
            </tr>
            <tr>
              <td>Round 2</td>
              <td>15 min</td>
              <td>20</td>
              <td>50</td>
              <td>100</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Col> */}
      <Col xs={3}>
        <Card className="mb-2">
          <Card.Header>Info</Card.Header>
          <Card.Body>
            <Card.Text>
              <ul>
                <li>Levels</li>
                <li>Rounds</li>
                <li>Breaks</li>
                <li>Length</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <AddRound />
        <AddBreak />
        <Button className="w-100 mb-2" variant="secondary">
          Set Rounds Duration
        </Button>
        <Button className="w-100 mb-2" variant="secondary">
          Save layout
        </Button>
        <Button className="w-100 mb-2" variant="secondary">
          Load layout
        </Button>
        <Button className="w-100 mb-2" variant="danger">
          Clear Rounds
        </Button>
      </Col>
    </Row>
  );
}
