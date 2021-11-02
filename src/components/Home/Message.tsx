import * as React from 'react';
import style from './Message.scss';

const Message:React.FC = () => {
  return (
    <>
      <h1 className={style.message}>Site is currently being retouched, check back for more.</h1>
    </>
  );
};

export default Message;
