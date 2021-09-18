import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup } from "react-bootstrap";
import CreateNewTournament from "./CreateNewTournament";

export default function TournamentsList() {
  const [tournaments, setTournaments] = useState([]);
  const [fetchAgain, setFetchAgain] = useState(false);

  const handleRefetch = () => setFetchAgain(!fetchAgain);

  const loadTournaments = async () => {
    try {
      let response = await fetch("http://localhost:3001/tournaments/");
      if (response.ok) {
        let tournaments = await response.json();
        setTournaments(tournaments);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadTournaments();
  }, []);

  useEffect(() => {
    loadTournaments();
  }, [fetchAgain]);

  return (
    <>
      <Row className="pr-0">
        <h2>Tournaments</h2>
        <Col></Col>
        <Col>
          <CreateNewTournament Toggle={() => handleRefetch(fetchAgain)} />
        </Col>
      </Row>
      <Row className="bg-dark text-white">
        <Col xs={3} className="p-2">
          Date
        </Col>
        <Col xs={5} className="p-2">
          Name
        </Col>
        <Col xs={2} className="p-2">
          Buy-in
        </Col>
        <Col xs={2} className="p-2">
          Game
        </Col>
        <ListGroup>
          {tournaments.map((t) => (
            <Link to={`/tournaments/${t.id}`}>
              <ListGroup.Item action>
                <Row>
                  <Col xs={3}>{t.date}</Col>
                  <Col xs={5}>{t.name}</Col>
                  <Col xs={2}>
                    {t.buyin} {t.currency}
                  </Col>
                  <Col xs={2}>{t.gametype}</Col>
                </Row>
              </ListGroup.Item>
            </Link>
          ))}
        </ListGroup>
      </Row>
      <Row>
        {/* <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Buy-in</th>
              <th>Game</th>
            </tr>
          </thead>
          <tbody>
            {tournaments.map((t) => (
              <tr>
                <td>{t.date}</td>
                <td>{t.name}</td>
                <td>
                  {t.buyin} {t.currency}
                </td>
                <td>{t.gametype}</td>
              </tr>
            ))}
          </tbody>
        </Table> */}
      </Row>
    </>
  );
}
