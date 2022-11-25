import { Header } from '../../components/Header';
import { ButtonText} from '../../components/ButtonText'
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Highlighter } from '../../components/Highlighter';
import { Mark } from '../../components/Mark';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

import { Container, Form } from './styles';

export function CreateNew(){
    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                    <Link to="/">
                    <ButtonText title="Voltar"/>
                    </Link>
                    <h1>Novo filme</h1>
                    </header>
                    <div>
                    <Input placeholder="Título"/>
                    <Input placeholder="Sua nota (de 0 a 5)"/>
                    </div>
                    <TextArea placeholder="Observações"/>
                    <Mark title="Marcadores">
                    <div className="marcadores">
                        <Highlighter value="React"/>
                        <Highlighter isNew placeholder="Novo marcador"/>
                    </div>
                    </Mark>
                    <div className='buttons'>
                        <Button title="Excluir filmes"/>
                        <Button title="Salvar alterações"/>
                    </div>
                </Form>
            </main>
        </Container>
    )
}