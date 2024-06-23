import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

//#region 
const FooterContainer = styled(Container)`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    // display: flex;
    // flex-direction: column;
    justify-items: center;
    align-items: center;
    align-content: center;
    padding: 20px 0px;
    border-top: 1px solid white;
    text-align: center;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        text-align: center;
        row-gap: 5px;
    }
`;

const IconContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: white;
    font-size: 15px;
    margin-bottom: 16px;
    // display:none;

    @media (max-width: 768px) {
        font-size: 20px;
        margin-bottom: 8px;
        display: flex
    }
`;

const Footertext = styled.p`
    color: white;
    font-size: 15px;
    text-align: center;
`;

const WorkTogether = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;

     @media (max-width: 768px) {
        display: none;
    }
`;

const PenIcon = styled(FontAwesomeIcon)`
    color: white;
    font-size: 15px;
    text-align: center;
    margin-bottom: 16px;
`;
//#endregion

export const Footer = () => {
    return (
        <FooterContainer className="footer-container">
            <Footertext>Samy Bidar ©</Footertext>
            <WorkTogether>
                <Footertext>Travaillons Ensemble </Footertext>
                <a href="mailto:samybidarpro@gmail.com" target="_blank" rel="noreferrer"><PenIcon icon={faPencil} className='text-light'/></a>
            </WorkTogether>
            <IconContainer>
                <a href='https://github.com/SamyBidar2' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className='text-light' /></a>
                <a href='https://www.linkedin.com/in/samybidar/' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className='text-light' /></a>
                <a href='https://www.instagram.com/samybidar/' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className='text-light' /></a>
            </IconContainer>
        </FooterContainer>
    )
}
