import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
// import SocialIcons from "./SocialIcons";

//#region 
const AboutContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 40px 56px;
    margin-left:0px;
    gap: 20px;
    align-self: stretch;        
`;

const Title = styled(motion.h1)`
    font-size:36px;
    text-align:center;
    color: #fff;
    // font-family: 'Courier New', Courier, monospace;
`;

const TypewriterContainer = styled.div`
    font-size: 24px;
    text-align:center;
    color: #fff;
    font-family: 'Courier New', Courier, monospace;
    .typewriter-cursor {
        display: inline-block;
        margin-left: 2px;
        animation: blink 1s step-end infinite;
    }
    @keyframes blink {
        from, to { opacity: 1 }
        50% { opacity: 0 }
    }
`;
//#endregion

export const Presentation = () => {
return (
        <AboutContainer>
            <Title 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0, duration: 0.5, type: "spring" }}>
                Samy Bidar
            </Title>

             <TypewriterContainer>
                <Typewriter
                    options={{
                        cursor: "|",
                    }}
                    onInit={(typewriter) => {
                        typewriter.changeDelay(50).typeString("Développeur Frontend").start();
                    }}
                />
            </TypewriterContainer>
        </AboutContainer>
    );
};

