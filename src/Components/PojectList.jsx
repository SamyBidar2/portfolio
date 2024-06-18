import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import projectdatas from '../Datas/projectsdatas.json';
import Container from 'react-bootstrap/Container';
import { ProjectModal } from './ProjectModal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

//#region 
const ProjectListContainer = styled(Container)`
  padding: 80px 0px;
`;

const ProjectListTitle = styled.h2`
  display: flex;
  justify-content: center;
  padding: 40px 0;
  text-align: center;
`;

const StyledRow = styled(Row)`
  margin-bottom: 30px;
`;

const StyledCol = styled(Col)`
  padding: 15px; 
`;
//#endregion


export const ProjectList = () => {

  // console.log(projectdatas);

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
      setSelectedProject(project);
      setShowModal(true);
  };

  const handleCloseModal = () => {
      setShowModal(false);
      setSelectedProject(null);
  };


  return (
    <ProjectListContainer>
      <ProjectListTitle className='text-light'>Tous mes Projets</ProjectListTitle>
      <StyledRow xs={1} md={2} lg={3} xl={3}>
        {projectdatas.map((data, index) => (
          <StyledCol key={`${data.id}-${index}`}>
            <ProjectCard project={data}  onCardClick={handleCardClick}/>
          </StyledCol>
        ))}
      </StyledRow>

      {selectedProject && (
            <ProjectModal
                show={showModal}
                onHide={handleCloseModal}
                project={selectedProject}
            />
        )}
    </ProjectListContainer>
  );
};
