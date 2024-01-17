import './styles.css';
import compImg from '../../assets/car-card 1.png';


export default function CardCar(){

    return(
        <div className="product-card">
            <div className="card-top-container">
                <img src={compImg} alt="Car card" />
                <p>Lorem ipsum dolor</p>
            </div>
        </div>
    );
}
