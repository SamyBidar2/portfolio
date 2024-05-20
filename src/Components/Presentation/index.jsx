import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';


const AboutContainer = styled(Container)`
    display: flex;
    max-width: 800px;
    padding: 40px 56px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left:0px;
    gap: 40px;
    align-self: stretch;        
`;
export const Presentation = ({}) => {
    return (
        <AboutContainer>
            <h1 className='text-light'>Samy Bidar</h1>
        </AboutContainer>
    );
};