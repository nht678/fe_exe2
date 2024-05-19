import React, { useState, useEffect } from "react";
import {
  Navbar,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Media,
  Nav,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
} from "reactstrap";
import { Link } from "react-router-dom";

const TutorNavbar = (props) => {
  // Khởi tạo state
  const [data, setData] = useState({});

  // Hàm fetchData
  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8000/tutor/home', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setData(json); // Cập nhật state
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Gọi hàm fetchData khi component được render
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>

    </>
  );
};

export default TutorNavbar;
