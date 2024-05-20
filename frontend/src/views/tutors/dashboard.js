import React from "react";
import { Card, Container, Row } from "reactstrap";
import Header from "components/Headers/Header.js";
import TeachingTimeChart from '../examples/TutorTeachingTime';

const TutorDashboardForm = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
          <Card className="shadow border-0" style={{ minHeight: '800px' }}>
              <TeachingTimeChart />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default TutorDashboardForm;