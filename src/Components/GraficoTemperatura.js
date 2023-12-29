import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);


export default function GraficoTemperatura(props) {
    const { data } = props;

    // Convertir timestamps a formatos de fecha y hora legibles
    const labels = data.map(item => new Date(item.time).toLocaleDateString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }));
    const temperature = data.map(item => item.value);

    const midata = {
        labels,
        datasets: [
            {
                label: 'temperature',
                data: temperature,
                tension: 0.5,
                fill: true,
                borderColor: '#028090',
                backgroundColor: '#C3DCF3',
                pointRadius: 5,
                pointBorderColor: '#028090',
                pointBackgroundColor: '#028090',
            },
        ],
    };

    const misoptions = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            y: {
                min: 0,
            },
            x: {
                ticks: { color: '#028090' },
            },
        },
    };

   

    return <Line data={midata} options={misoptions}/>
}

