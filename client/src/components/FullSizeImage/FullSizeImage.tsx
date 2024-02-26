import { createPortal } from 'react-dom';
import style from './fullSizeImage.module.scss';


const FullSizeImage = () => {
  const root: Element = document.querySelector('#root') as Element;

  return createPortal(<div className={style.fullSizeImage}>

  </div>, root)
}

export default FullSizeImage;