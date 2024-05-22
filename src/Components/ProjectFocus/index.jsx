import React from 'react';
import { ProjectCard } from '../ProjectCard';
import projectdatas from '../../Datas/projectsdatas.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import allprojectimage from '../../Images/allprojects.jpg';
import styled from 'styled-components';
import { Card as ApCard, Col, Row, Container, Button } from 'react-bootstrap';

const StyledCard = styled(ApCard)`
    padding: 0px;
    margin: 0px;
    margin-top:12px;
    border-radius: 10px;
    border: 1px solid #2b303b;
    background: #15181e;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 3px 8px 0px rgba(0, 0, 0, 0.12), 0px 8px 16px 0px rgba(0, 0, 0, 0.60);
    backdrop-filter: blur(12px);

    @media (max-width: 576px) {
        margin-top:0px;
    }
`;

const StyledCardBody = styled(ApCard.Body)`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 0px;
    margin: 0px;
    @media (max-width: 576px) {
        flex-direction: column;
    }
`;

const CardImg = styled(ApCard.Img)`
    border-radius: 10px;         
    @media (max-width: 576px) {
        width: 100%;
    }
`;

const CardContainer = styled(Container)`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 50px;

    @media (max-width: 576px) {
        padding: 20px;
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
    height: 72px

    @media (max-width: 576px) {
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

    @media (max-width: 576px) {
        width: 100%;
    }
`;

const ResponsiveCol = styled(Col)`
    margin-bottom: 15px; // Adjust this value to match your column spacing
    @media (max-width: 576px) {
        width: 100%;
    }
`;

const FullWidthCard = styled(Col)`
    margin-bottom: 15px;
    @media (max-width: 576px) {
        width: 100%;
    }
`;

export const ProjectFocus = () => {
    const reactproject = projectdatas.find(project => project.focus === 'React');
    const jsproject = projectdatas.find(project => project.focus === 'JS');
    const cssproject = projectdatas.find(project => project.focus === 'CSS');

    return (
        <Container>
            <h2 className='text-light'>Projets</h2>
            <Row>
                <ResponsiveCol xs={12} sm={4}>
                    <ProjectCard project={reactproject} />
                </ResponsiveCol>
                <ResponsiveCol xs={12} sm={4}>
                    <ProjectCard project={jsproject} />
                </ResponsiveCol>
                <ResponsiveCol xs={12} sm={4}>
                    <ProjectCard project={cssproject} />
                </ResponsiveCol>
            </Row>
            <Row>
                <FullWidthCard>
                    <StyledCard>
                        <StyledCardBody>
                            <CardImg src={allprojectimage} />
                            <CardContainer>
                                <CardTitle>Un aperçu de tous mes Projets</CardTitle>
                                <CardText>Retrouvez ici l'intégralité des projets sur lesquels j'ai travaillé</CardText>
                                <CardButton variant="outline-light" size="sm">Voir plus</CardButton>
                            </CardContainer>
                        </StyledCardBody>
                    </StyledCard>
                </FullWidthCard>
            </Row>
        </Container>
    );
};
