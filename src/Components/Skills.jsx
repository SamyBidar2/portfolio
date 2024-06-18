import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faCss3, faSass, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import adapt from '../Images/icons/icons8-adaptation-32.png';
import team from '../Images/icons/icons8-team-work-32.png';
import tenace from '../Images/icons/icons8-ténacité-32.png';
import empathie from '../Images/icons/icons8-empathie-32.png';
import learn from '../Images/icons/envie-apprendre-32.png';
import notion from '../Images/icons/icons8-notion-32.png';
import git from '../Images/icons/icons8-github-32.png';
import excel from '../Images/icons/icons8-ms-excel-32.png';
import vscode from '../Images/icons/icons8-visual-studio-32.png';

//#region 
const SkillsContainer = styled(Container)`
    display: flex;  
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    width: 100%;
    overflow: hidden;
    padding-bottom: 10%; 
    padding-left:40px;
    padding-right:40px;    
`;

const SkillsTitle = styled.h2`
    padding: 40px 0;
    text-align: center;
`;

const SkillsUl = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    width: 100%;
    padding: 0px 0px 50px 0px;
    margin: 0;
    border-radius: 10px;
    border: 1px solid #2b303b;
    background: #15181e;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 3px 8px 0px rgba(0, 0, 0, 0.12), 0px 8px 16px 0px rgba(0, 0, 0, 0.60);
    backdrop-filter: blur(12px);
`;

const SkillsLi = styled.li`
    display: flex;
    height: 110px;
    width: 110px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border: 1px solid;
    border-radius: 5px;
    @media (max-width: 768px) {
        height: 100px;
        width: 100px;
    }
    @media (max-width: 480px) {
        height: 80px;
        width: 80px;
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

const SkillsListContainer = styled(Container)`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
`;

const StyledTabs = styled(Tabs)`
    .nav-link {
        color: white;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .nav-link.active {
        border-color: #2b303b;
    }
    .nav-tab{
        height:42px;
    }
`;

const Styledspan = styled.span`
    font-size: 16px;
    @media (max-width: 768px) {
       font-size: 14px
    }
    @media (max-width: 480px) {
        font-size: 12px;
    }
`
//#endregion

export const Skills = () => {
    return (
        <SkillsContainer>
            <SkillsTitle className='text-light'>Compétences</SkillsTitle>
            <SkillsUl className='text-light'>
                <StyledTabs
                    defaultActiveKey="Techskills"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                >
                    <Tab eventKey="Techskills" title="Technologies">
                        <SkillsListContainer>
                            <SkillsLi>
                                <SkillsIcone icon={faJs} className='text-light' />
                                <Styledspan>Javascript</Styledspan>
                            </SkillsLi> 
                            <SkillsLi>
                                <SkillsIcone icon={faReact} className='text-light' />
                                <Styledspan>React</Styledspan>
                            </SkillsLi>
                            <SkillsLi>
                                <SkillsIcone icon={faHtml5} className='text-light' />
                                <Styledspan>Html 5</Styledspan>
                            </SkillsLi>
                            <SkillsLi>
                                <SkillsIcone icon={faCss3} className='text-light' />
                                <Styledspan>Css 3</Styledspan>
                            </SkillsLi>
                            <SkillsLi>
                                <SkillsIcone icon={faSass} className='text-light' />
                                <Styledspan>Sass</Styledspan>
                            </SkillsLi> 
                        </SkillsListContainer>
                    </Tab>
                    <Tab eventKey="Softskills" title="Soft skills">
                        <SkillsListContainer>
                            <SkillsLi>
                                <img src={adapt} alt='Adaptation' className='text-light' />
                                <Styledspan>Adaptation</Styledspan>
                            </SkillsLi> 
                            <SkillsLi>
                                <img src={team} alt='Equipe' className='text-light' />
                                <Styledspan>Equipe</Styledspan>
                            </SkillsLi>
                            <SkillsLi>
                                <img src={tenace} alt='Persévérance' className='text-light' />
                                <Styledspan>Persévérance</Styledspan>
                            </SkillsLi>
                            <SkillsLi>
                                <img src={learn} alt='Apprentissage' className='text-light' />
                                <Styledspan>Apprentissage</Styledspan>
                            </SkillsLi>
                            <SkillsLi>
                                <img src={empathie} alt='Empathie' className='text-light' />
                                <Styledspan>Empathie</Styledspan>
                            </SkillsLi>
                            <SkillsLi>
                                <img src={empathie} alt='Entrepreneur' className='text-light' />
                                <Styledspan>Entrepreneur</Styledspan>
                            </SkillsLi>
                        </SkillsListContainer>
                    </Tab>
                    <Tab eventKey="Tools" title="Outils">
                        <SkillsListContainer>
                            <SkillsLi>
                                <img src={notion} alt='Notion' className='text-light' />
                                <Styledspan>Notion</Styledspan>
                            </SkillsLi> 
                            <SkillsLi>
                                <img src={git} alt='Github' className='text-light' />
                                <Styledspan>Github</Styledspan>
                            </SkillsLi>
                            <SkillsLi>
                                <img src={excel} alt='Ms Office' className='text-light' />
                                <Styledspan>Office</Styledspan>
                            </SkillsLi>
                            <SkillsLi>
                                <img src={vscode} alt='Vs Code' className='text-light' />
                                <Styledspan>Vs Code</Styledspan>
                            </SkillsLi>
                        </SkillsListContainer>
                    </Tab>
                </StyledTabs>
            </SkillsUl> 
        </SkillsContainer>
    );
};
