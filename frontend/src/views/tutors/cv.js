import React from "react";
import { Card, Container, Row } from "reactstrap";
import Header from "components/Headers/Header.js";
import CV from "components/CV/uploadCV"
const CVForm = () => {
  console.log(123)
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
          <Card className="shadow border-0" style={{ minHeight: '500px' }}>
              
              <CV />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default CVForm;