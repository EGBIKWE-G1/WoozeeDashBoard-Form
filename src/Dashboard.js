import React from 'react';
import { Container, Row, Col } from 'reactstrap';
// import './App.css';
import Header from './components/shared/Header/header.component';
import Register from './components/Register/register.component';
import Product from './components/Product.component';


function DashBoard() {
  return (
    <div>
        <div  className="container-AddProduct">   
        {/* <Row> */}
          <Col md={4}>
            <Header />
          </Col>
        {/* </Row> */}
      </div>

      <div className="container-components12">
      <div className="container-components1">
      <Container>
        <div className="Registration-Container">
        <Row>
          <Col md={50}>   
            <Register />
          </Col>
        </Row>
        </div>
      </Container>
      </div>

      <div className="container-components2 ">
      <Container>
      <Row className="Product-Component">
          <Col md={50}> 
            <Product />
          </Col>
        </Row>
      </Container>
      </div>
      </div>
    </div>
  )
}

export default DashBoard;