import React from 'react';
import DevSpaceIco from '../../assets/space.jpg'

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon } from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar src={DevSpaceIco} />
        <UserData>
          <strong>DevSpace</strong>
          <strong>#0220</strong>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>


    </Container>
  )
};

export default UserInfo;