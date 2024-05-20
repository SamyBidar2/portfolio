
import { Button, Container } from 'react-bootstrap'
import { ProjectList } from '../../Components/ProjectList'
import { Presentation } from '../../Components/Presentation'

import './index.scss'
import { ProjectFocus } from '../../Components/ProjectFocus'

export const Home = () => {
    return (
        <Container>
            <Presentation/>
            <ProjectFocus/>
        </Container>
    )
}