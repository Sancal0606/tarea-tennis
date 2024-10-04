import './App.css';
import Puntos from './components/Puntos';
import Titulo from './components/Titulo';
import Boton from './components/Boton';
import { useState } from 'react';

function App() {
  console.log("Ejecutando App");
  //Estado de la app (2 valores)
  const [puntosA, setPuntosA] = useState(0);
  const [setsA, setSetsA] = useState(0);
  const [juegosA, setJuegosA] = useState(0);
  
  const [puntosB, setPuntosB] = useState(0);
  const [setsB, setSetsB] = useState(0);
  const [juegosB, setJuegosB] = useState(0);
  const [resultado, setResultado] = useState('Partido en Juego');


  //Handler para el onClick de los botones
  const onClickHandlerA = () => {
    setResultado('Partido en Juego');
    if(puntosA == 'AC'){
      setSetsA(setsA + 1);
      setPuntosA(0);
      setPuntosB(0);
    }
    else if(puntosB == 'AC'){
      setPuntosA(40);
      setPuntosB(40);
    }
    else if(puntosA == 40){
      if(puntosB == 40){
        console.log("Ayo");
        setPuntosA('AC');
      }
      else if(setsA == 5){
        setResultado('GANA JUGADOR A');
        
        setJuegosA(juegosA + 1);
        setSetsA(0);
        setSetsB(0);
        setPuntosA(0);
        setPuntosB(0);
      }else{
        
        setSetsA(setsA + 1);
        setPuntosA(0);
        setPuntosB(0);
      }
      
      
    }
    else if(puntosA == 30){
      setPuntosA(puntosA + 10)
    }else{
      setPuntosA(puntosA + 15)
    }
  }

  const onClickHandlerB = () => {
    setResultado('Partido en Juego');
    if(puntosB == 'AC'){
      setSetsB(setsB + 1);
      setPuntosA(0);
      setPuntosB(0);
    }
    else if(puntosA == 'AC'){
      setPuntosA(40);
      setPuntosB(40);
    }
    else if(puntosB == 40){
      if(puntosA == 40){
        setPuntosB('AC');
      }
      else if(setsB == 5){
        setResultado('GANA JUGADOR B');
        
        setJuegosB(juegosB + 1);
        setSetsA(0);
        setSetsB(0);
        setPuntosA(0);
        setPuntosB(0);
      }else{
        
        setSetsB(setsB + 1);
        setPuntosA(0);
        setPuntosB(0);
      }
      
      
    }
    else if(puntosB == 30){
      setPuntosB(puntosB + 10)
    }else{
      setPuntosB(puntosB + 15)
    }
  }

  const onClickHandlerReinicio = () => {
    setPuntosA(0);
    setPuntosB(0);
    setJuegosA(0);
    setJuegosB(0);
    setSetsA(0);
    setSetsB(0);
  }
  return (
    <div className="App">
      <Titulo texto = "Marcador de Tennis"/>
      <h3>JUGADOR A</h3>
      <div className='Contenedor'>
        <Puntos puntos = {juegosA} texto = "Juegos"></Puntos>
        <Puntos puntos = {setsA} texto = "Sets"></Puntos>
        <Puntos puntos = {puntosA} texto= "Puntos"></Puntos>
      </div>
      <h3>JUGADOR B</h3>
      <div className='Contenedor'>
        <Puntos puntos = {juegosB} texto = "Juegos"></Puntos>
        <Puntos puntos = {setsB} texto = "Sets"></Puntos>
        <Puntos puntos = {puntosB} texto = "Puntos"></Puntos>
      </div>

      <Boton texto = "Gana Punto A" onClick={onClickHandlerA}/>
      <Boton texto = "Gana Punto B" onClick={onClickHandlerB}/>
      <Boton texto = "Reiniciar" onClick={onClickHandlerReinicio}/>

      <h1>Resultado {resultado}</h1>

    </div>
  );
}

export default App;
