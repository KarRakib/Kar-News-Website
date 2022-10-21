import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub,FaFacebook,FaWhatsapp,FaTwitter } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../Context/UserContext';

const RightSideNav = () => {
    const {singInGoogle} = useContext(AuthContext)
    console.log(singInGoogle)
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={singInGoogle} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                <Button className='mb-2' variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <h5>Find us on</h5>
            <div>
                <Card style={{ width: '15rem' }}>
                    <Card.Header>Featured</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                        <ListGroup.Item><FaWhatsapp/> Whatsapp</ListGroup.Item>
                        <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;