import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Dashboard.css';
import Sidebar from './Sidebar';

const Dashboard = () => {
   return (
      <Container className="dashboard">
         <Row>
            <Col md={3}>
               <Sidebar />
            </Col>
            <Col md={9}>
               <h2 className="text-center pt-9">Welcome to your Dashboard.</h2>
            </Col>
         </Row>
      </Container>
   );
};

export default Dashboard;
