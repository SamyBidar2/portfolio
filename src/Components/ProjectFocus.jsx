import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import projectdatas from '../Datas/projectsdatas.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import allprojectimage from '../Images/allprojects.jpg';
import styled from 'styled-components';
import { Card as ApCard, Col, Row, Container, Button } from 'react-bootstrap';


//#region 
const ProjectFocusContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    padding-bottom: 10%;    
`;

const ProjectTitle = styled.h2`
    display: flex;
    justify-content: center;
    padding: 40px 0;
    text-align: center;
`;

const StyledCard = styled(ApCard)`
    padding: 0px;
    margin: 0px;
    margin-top: 12px;
    border-radius: 10px;
    border: 1px solid #2b303b;
    background: #15181e;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 3px 8px 0px rgba(0, 0, 0, 0.12), 0px 8px 16px 0px rgba(0, 0, 0, 0.60);
    backdrop-filter: blur(12px);

    @media (max-width: 768px) {
        margin-top: 0px;
    }
`;

const StyledCardBody = styled(ApCard.Body)`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 0px;
    margin: 0px;
    @media (max-width: 992px) {
        flex-direction: column;
    }
`;

const CardImg = styled(ApCard.Img)`
    border-radius: 10px;         
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const CardContainer = styled(Container)`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 50px;

    @media (max-width: 768px) {
        padding: 20px;
    }
    @media (min-width: 769px) and (max-width: 992px) {
        padding: 50px 20px; 
    }
`;

const CardTitle = styled(ApCard.Title)`
    color: var(--Adaptive-Medium, rgba(255, 255, 255, 0.80));
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 40px;
    height: 72px;

    @media (max-width: 768px) {
        font-size: 28px;
        margin-bottom: 20px;
    }
`;

const CardText = styled(ApCard.Text)`
    color: var(--Adaptive-Weak, rgba(255, 255, 255, 0.60));
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 20px;
`;

const CardButton = styled(Button)`
    border-radius: 10px;
    border: 1px solid #2b303b;
    font-size: 15px;
    box-sizing: border-box;
    padding: 15px;
    width: 220px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const ResponsiveCol = styled(Col)`
    margin-bottom: 15px; 
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const FullWidthCard = styled(Col)`
    margin-bottom: 15px;
    @media (max-width: 768px) {
        width: 100%;
    }
`;
//#endregion


export const ProjectFocus = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleCardClick = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProject(null);
    };
    const navigate = useNavigate();
    const reactproject = projectdatas.find(project => project.focus === 'React');
    const jsproject = projectdatas.find(project => project.focus === 'JS');
    const cssproject = projectdatas.find(project => project.focus === 'CSS');

    return (
        <ProjectFocusContainer>
            <ProjectTitle className='text-light'>Projets</ProjectTitle>
            <Row>
                <ResponsiveCol xs={12} md={12} lg={4}>
                    <ProjectCard project={reactproject} onCardClick={handleCardClick} />
                </ResponsiveCol>
                <ResponsiveCol xs={12} md={12} lg={4}>
                    <ProjectCard project={jsproject} onCardClick={handleCardClick} />
                </ResponsiveCol>
                <ResponsiveCol xs={12} md={12} lg={4}>
                    <ProjectCard project={cssproject} onCardClick={handleCardClick} />
                </ResponsiveCol>
            </Row>
            <Row>
                <FullWidthCard xs={12}>
                    <StyledCard>
                        <StyledCardBody>
                            <CardImg src={allprojectimage} />
                            <CardContainer>
                                <CardTitle>Un aperçu de tous mes Projets</CardTitle>
                                <CardText>Retrouvez ici l'intégralité des projets sur lesquels j'ai travaillé</CardText>
                                <CardButton variant="outline-light" size="sm" onClick={() => navigate('/allprojects')} >Voir plus</CardButton>
                            </CardContainer>
                        </StyledCardBody>
                    </StyledCard>
                </FullWidthCard>
            </Row>  

            {selectedProject && (
                <ProjectModal
                    show={showModal}
                    onHide={handleCloseModal}
                    project={selectedProject}
                />
            )}
        </ProjectFocusContainer>
    );
};