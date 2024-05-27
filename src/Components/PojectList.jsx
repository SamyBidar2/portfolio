import React from 'react';
import { ProjectCard } from './ProjectCard';
import projectdatas from '../Datas/projectsdatas.json';
// import styles from './ProjectList.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const ProjectList = () => {
    console.log(projectdatas); // Affiche tout le tableau de données dans la console

    return (
        <Container>
            <h2 className='text-light'>Tous mes Projets</h2>
            <Row>
                {projectdatas.map((data, index) => (
                    <Col key={`${data.id}-${index}`} xs={12} md={6} lg={6} xl={6}>
                        <ProjectCard project={data} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
