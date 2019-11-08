import React from 'react';
import { Link } from 'react-router-dom';

import Notification from '~/components/Notifications';

import logo from '~/assets/images/logo-header.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="goBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notification />
          <Profile>
            <div>
              <strong>Pedro Henrique</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="pedro"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
