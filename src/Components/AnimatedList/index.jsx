import React from 'react';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Container, Card } from 'react-bootstrap';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin-bottom: 20px;
`;

const AnimatedCard = styled(motion.div)`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const AnimatedList = () => {
  const { scrollY } = useViewportScroll();
  
  // First card transformations
  const firstCardScale = useTransform(scrollY, [0, 300], [1, 0.5]);
  const firstCardOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Second card transformations
  const secondCardY = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <Container>
      <AnimatedCard
        style={{
          scale: firstCardScale,
          opacity: firstCardOpacity
        }}
      >
        <StyledCard>
          <Card.Body>
            <Card.Title>Test 1</Card.Title>
          </Card.Body>
        </StyledCard>
      </AnimatedCard>

      <AnimatedCard
        style={{
          y: secondCardY
        }}
      >
        <StyledCard>
          <Card.Body>
            <Card.Title>Test 2</Card.Title>
          </Card.Body>
        </StyledCard>
      </AnimatedCard>

      <AnimatedCard>
        <StyledCard>
          <Card.Body>
            <Card.Title>Test 3</Card.Title>
          </Card.Body>
        </StyledCard>
      </AnimatedCard>

      <AnimatedCard>
        <StyledCard>
          <Card.Body>
            <Card.Title>Test 4</Card.Title>
          </Card.Body>
        </StyledCard>
      </AnimatedCard>
    </Container>
  );
};

export default AnimatedList;
