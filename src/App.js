import Menu from "./Compontents/Navbar/Menu";
import Dashboard from "./Compontents/Dashboard/Dashboard";
import TournamentsList from "./Compontents/Tournament/TournamentsList";
import Tournament from "./Compontents/Tournament/Tournament";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Menu />
      <Container>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/tournaments/" component={TournamentsList} />
          <Route exact path="/tournaments/:id" component={Tournament} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
