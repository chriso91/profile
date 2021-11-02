import * as React from 'react';
import me from '../../../assets/me.jpg';

import style from './Header.scss';

const Header:React.FC = () => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.pic}>
          <img src={me} className={style.myPicture}/>
        </div>
        <div className={style.text}>
          <h1>Christine O'Dea</h1>
          <h2>FrontEnd Developer</h2>
          <p>Passionate front end developer with over three years experience specializing in user friendly web pages and scalable e-commerce sites using Javascript, HTML5 and CSS.  Specializes in React to create readable and efficient code. </p>
        </div>
      </div>
    </div>
  )
}

export default Header;
