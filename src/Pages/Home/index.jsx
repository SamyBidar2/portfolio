import React from 'react';
import { Container } from 'react-bootstrap';
import { Presentation } from '../../Components/Presentation';
import { ProjectFocus } from '../../Components/ProjectFocus';
import { Skills } from '../../Components/Skills';
import { Timeline } from '../../Components/Timeline';

import './index.scss';

export const Home = () => {
  return (
    <Container>
      <section id="home">
        <Presentation name='Samy Bidar'/>
      </section>
      <section id="portfolio">
        <ProjectFocus/>
      </section>
      <section id="about">
        <Skills/>
        <Timeline/>
      </section>
    </Container>
  );
};


