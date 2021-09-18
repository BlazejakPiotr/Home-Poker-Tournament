import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">HomePokerTournament</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/">Dashboard</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/tournaments/">Tournaments</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
