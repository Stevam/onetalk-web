import React, { useEffect, useState } from 'react';
import './styles/Popup.css'; // Estilos para a popup

const Popup = ({ message, duration = 5000, onClose }) => {
    const [progress, setProgress] = useState(100); // Progresso da barra (100% a 0%)

    useEffect(() => {
        // Inicia a contagem regressiva
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress <= 0) {
                    clearInterval(interval);
                    onClose(); // Fecha a popup quando o tempo acabar
                    return 0;
                }
                return prevProgress - 100 / (duration / 100); // Atualiza o progresso
            });
        }, 100);

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar
    }, [duration, onClose]);

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <p>{message}</p>
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
        </div>
    );
};

export default Popup;