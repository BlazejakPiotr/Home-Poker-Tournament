import { Row, Col } from "react-bootstrap";
import CreateNewTournament from "../Tournament/CreateNewTournament";
export default function Dashboard() {
  return (
    <>
      <Row>
        <Col>Dashboard</Col>
        <Col>
          <CreateNewTournament />
        </Col>
      </Row>
      <Row>
        <Col>Tabela</Col>
      </Row>
    </>
  );
}
