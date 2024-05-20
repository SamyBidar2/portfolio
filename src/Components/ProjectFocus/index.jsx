import React from 'react';
import { ProjectCard } from '../ProjectCard';
import projectdatas from '../../Datas/projectsdatas.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import allprojectimage from '../../Images/allprojects.jpg'
import styled from 'styled-components';
import { Card as ApCard, Col, Row, Container, Button  } from 'react-bootstrap';

export const ProjectFocus = () => {
const reactproject = projectdatas.find(project => project.focus === 'React');
const jsproject = projectdatas.find(project => project.focus === 'JS');
const cssproject = projectdatas.find(project => project.focus === 'CSS');


const Card = styled(ApCard)`
    padding: 0px;
    maring: 0px;
    // box-sizing: border-box;
    // gap: 15px; 
    border-radius: 10px;
    border: 1px solid #2b303b;
    background: radial-gradient(100% 100% at 50% 50%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.02) 100%);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 3px 8px 0px rgba(0, 0, 0, 0.12), 0px 8px 16px 0px rgba(0, 0, 0, 0.60);
    backdrop-filter: blur(12px);
`;

const ApCardBody = styled(ApCard.Body)`
display:flex;
flex-direction: row;
`;


    return (
        <Container>
            <h2 className='text-light'>Projets</h2>
            <Row className="my-4">
                <Col xs={12} sm={4} className="mb-4"> {/* Ajouter une marge en bas sur les appareils mobiles */}
                    <ProjectCard project={reactproject} />
                </Col>
                <Col xs={12} sm={4} className="mb-4"> {/* Ajouter une marge en bas sur les appareils mobiles */}
                    <ProjectCard project={jsproject} />
                </Col>
                <Col xs={12} sm={4} className="mb-4"> {/* Ajouter une marge en bas sur les appareils mobiles */}
                    <ProjectCard project={cssproject} />
                </Col>
            </Row>
            <Row className="my-4">
                <Col className="mb-4"> {/* Ajouter une marge en bas sur les appareils mobiles */}
                    <Card>
                        <ApCardBody>
                            <Card.Img src={allprojectimage} />
                            <Container className="p-3">
                                <Card.Title>Tous mes Projets</Card.Title>
                                <Card.Text>Retrouvez ici l'intégralité des projets sur lesquels j'ai travaillé</Card.Text>
                                <Button variant="primary">Voir plus</Button>
                            </Container> 
                        </ApCardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
