import { useRef, useEffect } from 'react';
import { css } from '@emotion/core';
import Message from './Message';


const messagesStyle = css`
    height: 400px;
    overflow-x: hidden;
    overflow-y: scroll;
`;

const MessagesList = props => {
  const messagesRef = useRef();

  useEffect(() => {
    messagesRef.current.scroll(0, messagesRef.current.scrollHeight);
  }, [messagesRef.current, props.values]);

  return (
    <div css={messagesStyle} className="border" ref={messagesRef}>
      {props.values.map((message, index) => {
        return (
        <Message
          key={index}
          isOwn={message.user === props.user}
          sender={message.user}
        >
          {message}
        </Message>
      )})}
    </div>
  );
};

export default MessagesList;
