
import { Button, Container } from 'react-bootstrap'
import { ProjectList } from '../../Components/ProjectList'
import './index.scss'

export const Home = () => {
    return (
        <Container>
            <ProjectList/>
            <Button>List</Button>
        </Container>
    )
}