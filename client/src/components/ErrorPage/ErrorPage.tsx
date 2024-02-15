import { Carousel } from '../Carousel';
import styles from './errorPage.module.scss'


const ErrorPage = () => {
    return (
        <div className={styles['error-page']}>
            <h1>404</h1>
            <p>Pagina no encontrada</p>
            <button>Volver al Home</button>
            <Carousel />
        </div>
    )
}

export default  ErrorPage;