import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';

    
//#region 
const FooterContainer = styled (Container)`
    display: flex;
    padding: 80px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    align-self: stretch;
    gap: 10px;  
`
const IconContainer = styled (Container)`
    display: flex;
    justify-content:center;
    gap:10px;
    color: white;
    font-size: 30px;
    text-align: center;
`
const Footertext = styled.p`
    color: white;
    font-size: 20px;
    text-align: center;
`
//#endregion

export const Footer = () => {
    return (
        <FooterContainer className="footer-container">
            <Footertext>Samy Bidar ©</Footertext>
            <Footertext>Travaillons Ensemble</Footertext>
            <IconContainer>
                <a href='https://github.com/SamyBidar2' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className='text-light' /></a>
                <a href='https://www.linkedin.com/in/samybidar/' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className='text-light' /></a>
                <a href='https://github.com/SamyBidar2' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className='text-light' /></a>
            </IconContainer>
            
        </FooterContainer>
    )
}