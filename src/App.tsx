import * as React from "react";
import MyPicture from './components/Header/Header';
import Message from './components/Message/Message';
import {FC} from "react";

const App:FC = () => {
  return (
    <>
      <MyPicture />
      <Message />
    </>
  )
};

export default App;
