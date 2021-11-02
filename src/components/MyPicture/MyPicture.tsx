import * as React from 'react';
import me from '../../../assets/me.jpg';
import style from './MyPicture.scss';

const MyPicture:React.FC = () => {
  return (
    <>
      <img src={me} className={style.myPicture}/>
    </>
  )
}

export default MyPicture;
