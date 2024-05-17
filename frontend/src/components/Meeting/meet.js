import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
// import { Button, Input, Space, Checkbox, message } from "antd";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import PaymentProfileCard from '../ProfileCard/PaymentProfileCard.jsx';

function Meet() {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [balance, setBalance] = useState(0);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [ws, setWs] = useState(null); // Define ws here

  const cancelConnection = () => {
    setLoading(false);
    ws.close(); // Close the WebSocket connection
    ws.send(JSON.stringify({ action: 'cancel' }));
  }

  const startConnection = () => {
    setLoading(true);

    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const username = decodedToken.username;
    const role = decodedToken.role;

    setUsername(username);
    setRole(role);
    console.log(username)
    const ws = new WebSocket(`ws://localhost:8000/ws/${username}/${role}`);
    setWs(ws); // Update ws here

    ws.onopen = () => {
      console.log('WebSocket is connected');
      ws.send(JSON.stringify({ token }));
    };

    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);
      if (response.redirect_url) {
        window.location.href = response.redirect_url;
        setLoading(false); // Kết thúc hiệu ứng loading khi chuyển hướng
      }
      if (response.message) {
        setMessage(response.message);
      }
    };

    ws.onclose = () => {
      console.log('WebSocket is closed');
    };

    return () => {
      ws.close();
    };
  };

  return (
    <div>
      <style jsx>{`
        .loader {
          border: 16px solid #f3f3f3;
          border-radius: 50%;
          border-top: 16px solid #3498db;
          width: 120px;
          height: 120px;
          -webkit-animation: spin 2s linear infinite;
          animation: spin 2s linear infinite;
        }

        @-webkit-keyframes spin {
          0% { -webkit-transform: rotate(0deg); }
          100% { -webkit-transform: rotate(360deg); }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <Row >
        <Col style={{ justifyContent: "center", top: "10rem", display: "flex" }} md={8}>
          <div>
            {!loading && <Button variant="outline-primary" onClick={startConnection}>Start</Button>}
            {loading &&
              <>
                <Row style={{ marginBottom: "1rem" }} className="loader"></Row>
                <Row style={{ marginBottom: "1rem" }}>We are connecting a tutor for you </Row>
                <Button style={{ position: "absolute" }} onClick={cancelConnection} variant="outline-danger">Cancel</Button>{' '}
              </>
            }
          </div>
        </Col>
        <Col md={4}>
          <div style={{ height: "50px" }}>
            <PaymentProfileCard 
            />
            <div></div>
          </div>
        </Col>
      </Row>
    </div>

  );
}

export default Meet;


