import * as React from "react";
import Header from './Header';
import Message from './Message';

import style from './Home.scss';

const Home:React.FC = () => {
  return (
    <div className={style.home}>
      <div className={style.blueBlock} />
      <Header />
      <Message />
    </div>
  )
};

export default Home;
