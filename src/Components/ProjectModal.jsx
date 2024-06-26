import React from 'react';
import styled from 'styled-components';
import { Button, Carousel, Modal } from 'react-bootstrap';

const SkillsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    list-style: none;
`;

const SkillsTag = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid;
    box-sizing: border-box;
    padding: 5px;
    background-color: white;
    font-size:12px;
`;

const StyledCarousel = styled(Carousel)`
    .carousel-inner {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        border: 1px solid #2b303b;
        background: #15181e;
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04),
                    0px 3px 8px 0px rgba(0, 0, 0, 0.12),
                    0px 8px 16px 0px rgba(0, 0, 0, 0.60);
        backdrop-filter: blur(12px);
    }
    margin-bottom:20px; 
`;

const Description = styled.p`
    color: white;
`;

const CarousselImg = styled.img`
    width: 100%;
    height: 100%;
`;

const StyledModalHeader = styled(Modal.Header)`
    background: #15181e;
`;

const StyledModalBody = styled(Modal.Body)`
    background: #15181e;
`;

const StyledModalFooter = styled(Modal.Footer)`
    background: #15181e;
    display:flex;
    justify-content:space-between;
`;

const StyledButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid;
    box-sizing: border-box;
    padding: 10px;
    background-color: white;
    font-size:14px;
`;

export const ProjectModal = ({ show, onHide, project }) => {
    const baseURL = process.env.PUBLIC_URL;

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            data-bs-theme="dark"
        >
            <StyledModalHeader closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className='text-light'>
                    {project.title}
                </Modal.Title>
            </StyledModalHeader>
            <StyledModalBody>
                <StyledCarousel data-bs-theme="dark">
                    {project.ModalImages.map((modalImage, index) => (
                        <Carousel.Item key={`${project.id}-${index}`}>
                            <CarousselImg src={`${baseURL}${modalImage}`} alt='illustration du projet' />
                        </Carousel.Item>
                    ))}
                </StyledCarousel>
                {Array.isArray(project.description) ? (
                    project.description.map((element, index) => (
                        <Description key={index}>
                            {element}
                        </Description>
                    ))
                ) : (
                    <Description>
                        {project.description}
                    </Description>
                )}
            </StyledModalBody>
            <StyledModalFooter>
                <StyledButton variant="outline-light">
                    <a href={project.github} target="_blank" rel="noreferrer">Voir Plus</a>
                </StyledButton>
                <SkillsList>
                    {project.technologies.map((element, index) => (
                        <SkillsTag key={`${index}-${element}`}>
                            {element}
                        </SkillsTag>
                    ))}
                </SkillsList>
            </StyledModalFooter>
        </Modal>
    );
};
