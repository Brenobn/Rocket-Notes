import { RiShutDownLine } from 'react-icons/ri';

import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img 
          src="https://github.com/Brenobn.png"
          alt="Foto do usuário" 
       />

       <div>
        <span>Bem-vindo</span>
        <strong>Breno Leonardo</strong>
       </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}