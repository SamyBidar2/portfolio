import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faCss3, faSass, faHtml5 } from '@fortawesome/free-brands-svg-icons';

const SkillsContainer = styled(Container)`
    display: flex;  
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    width: 100%;
    overflow: hidden;
    padding-bottom: 10%;    
`;

const SkillsTitle = styled.h2`
    padding: 40px 0;
    text-align: center;
`;

const SkillsUl = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    width: 100%;
    padding: 50px 0;
    margin: 0;
    border-radius: 10px;
    border: 1px solid #2b303b;
    background: #15181e;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 3px 8px 0px rgba(0, 0, 0, 0.12), 0px 8px 16px 0px rgba(0, 0, 0, 0.60);
    backdrop-filter: blur(12px);
`;

const SkillsLi = styled.li`
    display: flex;
    height: 100px;
    width: 100px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:5px;
    border: 1px solid;
    border-radius: 5px;
    @media (max-width: 768px) {
        height: 80px;
        width: 80px;
    }
    @media (max-width: 480px) {
        height: 60px;
        width: 60px;
    }
`;

const SkillsIcone = styled(FontAwesomeIcon)`
    height: 32px;
    width: 32px;
    color: var(--Adaptive-Weak, #717689);
    @media (max-width: 768px) {
        height: 24px;
        width: 24px;
    }
    @media (max-width: 480px) {
        height: 20px;
        width: 20px;
    }
`;

export const Skills = () => {
    return (
        <SkillsContainer>
            <SkillsTitle className='text-light'>Skills</SkillsTitle>
            <SkillsUl className='text-light'>
                <SkillsLi>
                    <SkillsIcone icon={faJs} className='text-light'/>
                    <span>Javascript</span>
                </SkillsLi> 
                <SkillsLi>
                    <SkillsIcone icon={faReact} className='text-light' />
                    <span>React</span>
                </SkillsLi>
                <SkillsLi>
                    <SkillsIcone icon={faHtml5} className='text-light' />
                    <span>HTML 5</span>
                </SkillsLi>
                <SkillsLi>
                    <SkillsIcone icon={faCss3} className='text-light'/>
                    <span>CSS 3</span>
                </SkillsLi>
                <SkillsLi>
                    <SkillsIcone icon={faSass} className='text-light'/>
                    <span>Sass</span>
                </SkillsLi>  
            </SkillsUl> 
        </SkillsContainer>
    );
};

export default Skills;
