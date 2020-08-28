import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage 
          key={n}
          author="Herick Exterkoetter"
          date="09/01/2020"
          content="Hoje é o meu aniversário!"
        />
        ))}
        
      <ChannelMessage 
          author="DevSpace"
          date="09/01/2020"
          content={
            <>
              <Mention>@Herick Exterkoetter</Mention>, OI herick
            </>
          }
          hasMention
          isBot
        />

      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
};

export default ChannelData;