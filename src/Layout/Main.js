import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Sheared/Footer/Footer';
import Header from '../Sheared/Header/Header';
import LeftSideNav from '../Sheared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Sheared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div className='container'>
            <Header></Header>
            <Container>
                <Row>
                    <Col md="2" className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col md="7">
                        <Outlet></Outlet>
                    </Col>
                    <Col md="3">
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;