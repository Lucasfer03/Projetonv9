import { Container, Form, Avatar } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { Input } from '../../components/Input';
import { FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'
import { Button } from '../../components/Button';
import { Link } from "react-router-dom";

export function Profile(){
    return(
        <Container>
            <header>
                <Link to="/">
                    <ButtonText title="Voltar"/>
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/Lucasfer03.png" alt="Foto de perfil do Usuário" />
                    
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input
                        id="avatar"
                        type="file"
                        />
                    </label>
                </Avatar>
                <Input
                placeholder="Nome"
                type="text"
                icon={FiUser}/>

                <Input
                placeholder="E-mail"
                type="email"
                icon={FiMail}/>

                <Input
                placeholder="Senha Atual"
                type="password"
                icon={FiLock}/>

                <Input
                placeholder="Nova senha"
                type="password"
                icon={FiLock}/>
                
                <Button title="Salvar"/>
            </Form>
        </Container>
    )
}