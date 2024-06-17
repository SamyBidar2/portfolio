import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAt, faMobileScreen} from '@fortawesome/free-solid-svg-icons';

//#region 
const LateralContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    padding: 5px;
    border: 1px solid white;
    border-radius: 2px;
    position: fixed;
    bottom: 0;
    left: 0;
    
`;

const IconContainer = styled(Container)`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: white;
    font-size: 18px;
`;





//#endregion

export const Lateral = () => {
    return (
        <LateralContainer className="footer-container">
            <IconContainer>
                <a href='https://github.com/SamyBidar2' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faAt} className='text-light' /></a>
                {/* <a href='https://github.com/SamyBidar2' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faMobileScreen} className='text-light' /></a> */}
                <a href='https://github.com/SamyBidar2' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className='text-light' /></a>
                <a href='https://www.linkedin.com/in/samybidar/' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className='text-light' /></a>
                <a href='https://github.com/SamyBidar2' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className='text-light' /></a>
            </IconContainer>
        </LateralContainer>
    )
}
