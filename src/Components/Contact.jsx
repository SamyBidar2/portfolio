import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import {  Card as BootstrapCard  } from 'react-bootstrap';

import mail from '../Images/mail.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faMobileScreen} from '@fortawesome/free-solid-svg-icons';


//#region 
const ContactContainer = styled(Container)`
    display: flex;  
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    width: 100%;
    overflow: hidden;
    padding-bottom: 10%;    
  `;

  const ContactTitle = styled.h2`
    display: flex;
    justify-content: center;
    padding: 40px 0;
    text-align: center;
`;

  const Card = styled(BootstrapCard)`
    // width: 760px;
    // height: 500px;
    padding: 30px;
    box-sizing: border-box;
    gap: 15px; 
    border-radius: 10px;
    border: 1px solid #2b303b;
    background: #15181e;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 3px 8px 0px rgba(0, 0, 0, 0.12), 0px 8px 16px 0px rgba(0, 0, 0, 0.60);
    backdrop-filter: blur(12px);

    &:hover {
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08), 0px 2px 4px 0px rgba(0, 0, 0, 0.16), 0px 2px 4px 0px rgba(0, 0, 0, 0.32); 
        filter: drop-shadow(0 0 1px #22272e); 
    }
`;

  const CardBody = styled(BootstrapCard.Body)`
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  align-content: flex-start;
  align-self: stretch; 
  gap: 20px;
  box-sizing: border-box;
  padding: 12px 40px;  
  
  // @media (max-width: 768px) {
  //   flex-direction:column;
  //   gap:30px;
`;

const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    align-self: stretch;
`;
const InfoContainer = styled(Container)`
  display:flex;
  flex-direction:column;
  justify-content:center;
  gap:8px;
`

const StyleIconContainer = styled(Container)`
  display :flex;
  justify-content:flex-start;
  align-content:center;
  align-items:center;
  gap:8px;
`;

const CardTitle = styled(BootstrapCard.Title)`
    color:white;
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;  
    margin:0;   
    max-width:400px;         
`;

const CardText = styled(BootstrapCard.Text)`
    color: var(--Adaptive-Weak, rgba(255, 255, 255, 0.85));
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;  
    // margin-bottom : 20px;           
`;

const MailImg = styled.img`
  height: 150px;
  width: 100%;
  max-width:150px;

  @media (max-width: 768px) {
    height: 75px;
    width: 100%;
    max-width: 75px;
`;


const StyledIcone = styled(FontAwesomeIcon)`
  color:white;
  font-size:16px
`;
//#endregion

export const Contact = () => {
  return (
    <ContactContainer>
        <ContactTitle className='text-light'>Contact</ContactTitle>
        <Card>
          <CardBody>
              <CardTitle>Envie de discuter de votre projet autour d'un café ou d'une visioconférence? </CardTitle>
              <TextContainer>
                  <InfoContainer>
                    <StyleIconContainer>
                      <StyledIcone icon={faAt}/>
                      <CardText>samybidarpro@gmail.com</CardText>
                    </StyleIconContainer>
                    <StyleIconContainer>
                      <StyledIcone icon={faMobileScreen}/>
                      <CardText>06.98.50.37.79</CardText>
                    </StyleIconContainer>
                  </InfoContainer>
                  <MailImg src={mail} alt=''/>
              </TextContainer>
              
          </CardBody>
        </Card>
    </ContactContainer>
  );
};