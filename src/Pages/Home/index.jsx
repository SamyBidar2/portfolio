
import { Button, Container } from 'react-bootstrap'
import { ProjectList } from '../../Components/ProjectList'
import { Presentation } from '../../Components/Presentation'
import { AnimatedList } from '../../Components/AnimatedList'

import './index.scss'
import { ProjectFocus } from '../../Components/ProjectFocus'
import { Skills } from '../../Components/Skills'

export const Home = () => {
    return (
        <Container>
            <Presentation name='Samy Bidar'/>
            <ProjectFocus/>
            {/* <AnimatedList/> */}
            <Skills/>
        </Container>
    )
}