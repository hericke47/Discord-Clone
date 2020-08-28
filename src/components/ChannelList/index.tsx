import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      {/* <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="Trabalho" />
      <ChannelButton channelName="Lolzin" />
      <ChannelButton channelName="CsGo" />
      <ChannelButton channelName="Valorant" />
      <ChannelButton channelName="Superman" /> */}

    </Container>
  )
};

export default ChannelList;