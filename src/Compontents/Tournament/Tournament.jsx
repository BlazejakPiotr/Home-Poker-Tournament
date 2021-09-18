import { useEffect, useState } from "react";
import { Row, Col, Tabs, Tab } from "react-bootstrap";
import { useParams } from "react-router";
import GeneralTab from "./Tabs/GeneralTab/GeneralTab";
import RoundsTab from "./Tabs/RoundsTab/RoundsTab";

export default function Tournament() {
  const params = useParams();
  const [settings, setTournamentSettings] = useState({});
  const [refetch, setRefetchAgain] = useState(false);

  const handleRefetch = () => setRefetchAgain(!refetch);

  const fetchTournament = async () => {
    try {
      let response = await fetch(
        `http://localhost:3001/tournaments/${params.id}`
      );
      if (response.ok) {
        let data = await response.json();
        setTournamentSettings(data);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTournament();
  }, []);
  useEffect(() => {
    fetchTournament();
  }, [refetch]);

  return (
    <>
      <Row>
        <Col className="p-3">
          <h4>{settings.name}</h4>
        </Col>
      </Row>
      <div className="bg-dark text-white p-3 clock">
        <Row>
          <Col xs={2}>
            <Row>
              <Col xs={12}>
                <h6>Players-in</h6>1/32
              </Col>
              <Col xs={12} className="py-3">
                <h6>Rebuys</h6>0
              </Col>
              <Col xs={12}>
                <h6>Average stack</h6> 1500
              </Col>
            </Row>
          </Col>
          <Col xs={8} className="text-center">
            <Row>
              <Col className="text-center">Round 1</Col>
            </Row>
            <Row>
              <Col xs={4}>
                <h6>Blinds</h6> 20/40
              </Col>
              <Col xs={4} className="py-1">
                <h1>16:23</h1>
              </Col>
              <Col xs={4}>
                <h6>Ante</h6> 0
              </Col>
            </Row>
          </Col>
          <Col xs={2}>
            <Row>
              <Col xs={12}>
                <h6>Current time</h6>1/32
              </Col>
              <Col xs={12} className="py-3">
                <h6>Time elapsed</h6>0
              </Col>
              <Col xs={12}>
                <h6>Next break</h6> 1500
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Row>
        <Col className="mt-4">
          <Tabs defaultActiveKey="General" id="uncontrolled-tab-example">
            <Tab eventKey="General" title="General">
              <GeneralTab
                data={params.id}
                Toggle={() => handleRefetch(refetch)}
              />
            </Tab>
            <Tab eventKey="Blinds" title="Blinds">
              <RoundsTab />
            </Tab>
            <Tab eventKey="Players" title="Players">
              text
            </Tab>
            <Tab eventKey="Tables" title="Tables">
              text
            </Tab>
            <Tab eventKey="Prizes" title="Prizes">
              text
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </>
  );
}
