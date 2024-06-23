import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAt} from '@fortawesome/free-solid-svg-icons';


//#region 
const LateralContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    // width: 30px;
    padding: 8px;

    // position: absolute;
    // bottom: 3%;
    // left: 17%;

     @media (max-width: 768px) {
        display: none;
    } 
`;

const IconContainer = styled(Container)`
    display: flex;
    // flex-direction:column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: white;
    font-size: 20px;
    padding: 0px 15px;
`;

const Deco = styled.span`
    border-top: 1px solid white;
    box-sizing:bordr-box;
    padding: 0px 20px;
`
//#endregion

export const Lateral = () => {
    return (
        <LateralContainer className="footer-container">
            <Deco/>
            <IconContainer>
                <a href='https://github.com/SamyBidar2' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faAt} className='text-light' /></a>
                {/* <a href='https://github.com/SamyBidar2' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faMobileScreen} className='text-light' /></a> */}
                <a href='https://github.com/SamyBidar2' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className='text-light' /></a>
                <a href='https://www.linkedin.com/in/samybidar/' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className='text-light' /></a>
                <a href='https://www.instagram.com/samybidar/' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className='text-light' /></a>
            </IconContainer>
            <Deco/>
        </LateralContainer>
    )
}
