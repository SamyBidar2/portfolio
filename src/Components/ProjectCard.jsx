import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card as BootstrapCard } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNodes } from '@fortawesome/free-solid-svg-icons';

//#region 
const Card = styled(BootstrapCard)`
    // width: 760px;
    //height: 500px;
    padding: 8px;
    box-sizing: border-box;
    gap: 15px; 
    border-radius: 10px;
    border: 1px solid #2b303b;
    // background: radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.02) 100%);
    background: #15181e;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 3px 8px 0px rgba(0, 0, 0, 0.12), 0px 8px 16px 0px rgba(0, 0, 0, 0.60);
    backdrop-filter: blur(12px);

    &:hover {
        // background: #22272e; /* Change background color on hover */
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08), 0px 2px 4px 0px rgba(0, 0, 0, 0.16), 0px 2px 4px 0px rgba(0, 0, 0, 0.32); 
        // filter: drop-shadow(0 0 1px #8A2BE2); 
        filter: drop-shadow(0 0 1px #22272e); 
    }
`;

const CardImg = styled(BootstrapCard.Img)`
    border-radius: 10px;   
`;

const CardBody = styled(BootstrapCard.Body)`
    display: flex;
    flex-direction: Column;
    align-items: flex-start;
    align-content: flex-start;
    align-self: stretch; 
    gap: 24px;
    box-sizing: border-box;
    padding: 12px 20px;    
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    align-self: stretch;
`;

const ProjectIcone = styled(FontAwesomeIcon)`
    height: 32px;
    width: 32px;
    color: var(--Adaptive-Weak, #717689);
`;

const CardTitle = styled(BootstrapCard.Title)`
    // color: var(--Adaptive-Medium, rgba(255, 255, 255, 0.80));
    color:white;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;  
    margin:0;          

`;

const CardText = styled(BootstrapCard.Text)`
    color: var(--Adaptive-Weak, rgba(255, 255, 255, 0.85));
    // color:white;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;  
    margin-bottom : 20px;           
`;
//#endregion

export const ProjectCard = ({ project, onCardClick }) => {
    return (
        <Card onClick={() => onCardClick(project)}>
            <CardImg src={project.cover} />
            <CardBody>
                <ProjectIcone icon={faCircleNodes} />
                <TextContainer>
                    <CardTitle>{project.title}</CardTitle>
                    <CardText>{project.shortdescrition}</CardText>
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