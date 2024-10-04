//Autor: Carlos Alberto Sánchez Calderón
import "../styles/puntos.css";

const Puntos = (props) => {
  return (
    <div>
      <h2>{props.texto}</h2>
      <div className="puntos-tenis">{props.puntos}</div>
    </div>
  )
};
export default Puntos;

