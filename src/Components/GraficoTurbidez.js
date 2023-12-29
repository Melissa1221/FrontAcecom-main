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


export default function GraficoTurbidez(props) {
    const { data } = props;

    // Convertir timestamps a formatos de fecha y hora legibles
    const labels = data.map(item => new Date(item.time).toLocaleDateString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }));
    const turbidity = data.map(item => item.value);

    const midata = {
        labels,
        datasets: [
            {
                label: 'turbidity',
                data: turbidity,
                tension: 0.5,
                fill: true,
                borderColor: '#02C39A',
                backgroundColor: '#B0E1C8',
                pointRadius: 5,
                pointBorderColor: '#02C39A',
                pointBackgroundColor: '#02C39A',
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
                ticks: { color: '#02C39A' },
            },
        },
    };

   

    return <Line data={midata} options={misoptions}/>
}

