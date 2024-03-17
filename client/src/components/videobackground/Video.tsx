import style from './video.module.scss'
import video from '../../assets/video/video agro.mp4'

const Video = () => {
  return (
    <div className={style['container-video']}>
      <video src={video} autoPlay loop muted />
      <div className={style['text']}>

      {/* <p>CALIDAD ASEGURADA</p> */}

      </div>
    </div>
  )
}

export default Video
