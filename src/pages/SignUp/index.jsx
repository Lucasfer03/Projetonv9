import { Container, Form, Background } from "./styles";
import { Input } from '../../components/Input'
import { FiMail, FiLock, FiUser} from 'react-icons/fi'
import { Button } from '../../components/Button'
import { ButtonText } from "../../components/ButtonText";
import { Link } from "react-router-dom";

export function SignUp() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua Conta</h2>
                <Input
                placeholder="Nome"
                type="text"
                icon={FiUser}
                />
                <Input
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                />
                 <Input
                placeholder="senha"
                type="password"
                icon={FiLock}
                />

                <Button title="Entrar"/>

                <Link to="/">
                    <ButtonText title="Voltar para o login"/> 
                </Link>

            </Form>
            <Background/>
        </Container>
    );
}