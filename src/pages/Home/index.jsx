import { Container, Brand, NewMovie, Content } from './styles.js'
import { Header } from '../../components/Header';
import { IoAddOutline } from 'react-icons/io5';
import { Note } from '../../components/Note';

export function Home() {
    return(
    <Container>
        <Header/>
        <Brand>
        <h1>Meus Filmes</h1>
        <NewMovie>
            <IoAddOutline/> Adicionar Filme
        </NewMovie>
        </Brand>
        <Content>
            <Note data={{
                title: 'Interstellar', 
                tags: [
                    {id: '1', name: 'Ficção Científica'},
                    {id: '2', name: 'Drama'},
                    {id: '3', name: 'Família'},
                ]
            }}
            />
        </Content>
        <Content>
            <Note data={{
                title: 'Interstellar', 
                tags: [
                    {id: '1', name: 'Ficção Científica'},
                    {id: '2', name: 'Drama'},
                    {id: '3', name: 'Família'},
                ]
            }}
            />
        </Content>
        <Content>
            <Note data={{
                title: 'Interstellar', 
                tags: [
                    {id: '1', name: 'Ficção Científica'},
                    {id: '2', name: 'Drama'},
                    {id: '3', name: 'Família'},
                ]
            }}
            />
        </Content>
    </Container>
    )
}