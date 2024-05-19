import React from 'react';
import styled from 'styled-components';
import { Card as BootstrapCard } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNodes } from '@fortawesome/free-solid-svg-icons';

const Card = styled(BootstrapCard)`
    width: 760px;
    height: 480px;
    padding: 8px;
    gap: 8px; 
    border-radius: 40px;
    border: 1px solid #FFF;
    background: radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.02) 100%);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 3px 8px 0px rgba(0, 0, 0, 0.12), 0px 8px 16px 0px rgba(0, 0, 0, 0.60);
    backdrop-filter: blur(12px);
`;

const CardImg = styled(BootstrapCard.Img)`
    border-radius: 40px;    
`;

const CardBody = styled(BootstrapCard.Body)`
    display: flex;
    padding: 12px 40px;
    align-items: center;
    gap: 24px;
    align-self: stretch;   
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
`;

const ProjectIcone = styled(FontAwesomeIcon)`
    height: 32px;
    width: 32px;
    color: var(--Adaptive-Weak, #717689);
`;

const CardTitle = styled(BootstrapCard.Title)`
    color: var(--Adaptive-Medium, rgba(255, 255, 255, 0.80));
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;  
    margin:0;            
`;

const CardText = styled(BootstrapCard.Text)`
color: var(--Adaptive-Weak, rgba(255, 255, 255, 0.60));
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;           
`;


export const ProjectCard = ({ project }) => {
    return (
        <Card>
            <CardImg src={project.cover} />
            <CardBody>
                <ProjectIcone icon={faCircleNodes} />
                <TextContainer>
                    <CardTitle>{project.title}</CardTitle>
                    <CardText>{project.description}</CardText>
                </TextContainer>
            </CardBody>
        </Card>
    );
};



// import { Card } from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCircleNodes } from '@fortawesome/free-solid-svg-icons'

// // import './index.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from './ProjectCard.module.scss';

// export const ProjectCard= ({project}) => {
//     return (
//             <Card className={styles.cardCustomContainer}>
//                 <Card.Img src={project.cover} className={styles.cardImg}/>
//                 <Card.Body className={styles.cardBody}>
//                 <FontAwesomeIcon icon={faCircleNodes} className={styles.projectIcon}/>
//                     <div className={styles.textContainer}>
//                         <Card.Title className={styles.cardTitle}>{project.title}</Card.Title>
//                         <Card.Text className={styles.cardText}>{project.description}</Card.Text>
//                     </div>
//                 </Card.Body>
//             </Card>
//     )
// }