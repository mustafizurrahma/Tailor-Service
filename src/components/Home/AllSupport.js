import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AllSupport = () => {
  return (
    <section className="all-support mt-5 py-5">
      <Container>
        <Row className="all-support-info align-items-center">
          <Col md={10}>
            <div className="title">
              <h3>If there is any defect in our work, it is fixed</h3>
            </div>
            <h2>Trousers, Evening Dresses, Wedding Dresses</h2>
            <p>We offer both in shop and on site Tailor service.</p>
            <button className="btn custom-btn mt-3">Read more</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllSupport;
