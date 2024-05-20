import React from "react";
import { Card, Container, Row } from "reactstrap";
import Header from "components/Headers/Header.js";
import UserMeetingRoom from 'components/Room/user.js';

const UserMeetingRoomForm = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
          <Card className="shadow border-0" style={{ minHeight: '700px' }}>
              <UserMeetingRoom />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default UserMeetingRoomForm;