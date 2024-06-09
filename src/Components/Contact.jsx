import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import {  Card as BootstrapCard  } from 'react-bootstrap';
import mail from '../Images/mail.png';

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
    //height: 500px;
    padding: 30px;
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

  const CardBody = styled(BootstrapCard.Body)`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  align-self: stretch; 
  gap: 60px;
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

const CardTitle = styled(BootstrapCard.Title)`
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
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;  
    // margin-bottom : 20px;           
`;

const MailImg = styled.img`
  height: 150px;
  //width: 100%;
`
//#endregion

export const Contact = () => {
  return (
    <ContactContainer>
        <ContactTitle className='text-light'>Contact</ContactTitle>
        <Card>
          <CardBody>
              <TextContainer>
                  <CardTitle>Me contacter par Mail</CardTitle>
                  <CardText>samybidarpro@gmail.com</CardText>
                  <CardText>06.98.50.37.79</CardText>
              </TextContainer>
              <MailImg src={mail} alt=''/>
          </CardBody>
        </Card>
    </ContactContainer>
  );
};


