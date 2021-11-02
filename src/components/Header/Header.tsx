import * as React from 'react';
import MyPicture from '../MyPicture/MyPicture';

import style from './Header.scss';

const Header:React.FC = () => {
  return (
    <>
      <div className={style.blueBlock}/>
      <div className={style.container}>
        <div className={style.pic}>
          <MyPicture />
        </div>
        <div className={style.text}>
          <h1>Christine O'Dea</h1>
          <h2>FrontEnd Developer</h2>
          <p>Passionate front end developer with over three years experience specializing in user friendly web pages and scalable e-commerce sites using Javascript, HTML5 and CSS.  Specializes in React to create readable and efficient code. </p>
        </div>
      </div>
    </>
  )
}

export default Header;
