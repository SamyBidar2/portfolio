import { Container } from 'react-bootstrap';
import backgroundImage from '../../Images/clash.webp';
import styled from 'styled-components';

const BackgroundContainer = styled(Container)`
    height: 100vh; 
    width: 100vw;  
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; 
    padding: 0; 
`;

const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; 
    z-index: 0; 
`;

const ErrorText = styled.h1`
    color: white; 
    z-index: 1; 
    font-size: 60px;
    position: absolute;
    top: 150px;
`;

export const Error = () => {
    return (
        <BackgroundContainer fluid>
            <BackgroundImage src={backgroundImage} alt='Broken guitar background'/>
            <ErrorText>Page non trouvée</ErrorText>
        </BackgroundContainer>
    )
}
