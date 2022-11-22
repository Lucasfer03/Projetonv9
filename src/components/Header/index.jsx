import { Container, Profile, Search} from "./style";
import { Input } from "../Input";
import { FiSearch } from 'react-icons/fi'

export function Header(){
     return(
        <Container>            
            <h1>RocketMovies</h1>
            <Search>
              <Input placeholder="Pesquisa pelo título" icon={FiSearch}/>
            </Search>
            <Profile>
              <div> 
                <span>Lucas Fernandes</span>
                <strong>Sair</strong>
              </div>
                <img src="https://github.com/Lucasfer03.png" alt="foto do usuário" />
            </Profile>
        </Container>
    )
}