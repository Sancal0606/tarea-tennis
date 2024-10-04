//Autor: Carlos Alberto Sánchez Calderón
import "../styles/boton.css"

const Puntos = (props) => {
    return (
        <button className="boton-tenis" onClick={props.onClick}>
            {props.texto}
        </button>
    )
};
export default Puntos;