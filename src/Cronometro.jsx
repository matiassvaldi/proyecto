import { useState, useEffect } from 'react';
import './Cronometro.css';

function Cronometro() {
    const [time, setTime] = useState(0);
    const [isActivo, setIsActivo] = useState(false); 

    useEffect(() => {
        let intervalo = null; 
        if (isActivo) { 
            intervalo = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else if (!isActivo && time !== 0) { 
            clearInterval(intervalo);
        }
        return () => clearInterval(intervalo); 
    }, [isActivo, time]); 

    const manejarIniciarPausar = () => { 
        setIsActivo(!isActivo); 
    };

    const manejarReiniciar = () => { 
        setIsActivo(false); 
        setTime(0);
    };

    const formatearTiempo = () => { 
        const minutos = Math.floor(time / 60); 
        const segundos = time % 60; 
        return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`; 
    };

    return (
        <div className="cronometro-container">
            <h1>CRONÓMETRO</h1>
            <div className="cronometro-screen">
                {formatearTiempo()} 
            </div>
            <div className="cronometro-buttons">
                <button onClick={manejarIniciarPausar}>
                    {isActivo ? 'Pausar' : 'Iniciar'} 
                </button>
                <button onClick={manejarReiniciar} disabled={time === 0}>
                    Reiniciar
                </button>
            </div>
        </div>
    );
}

export default Cronometro;
