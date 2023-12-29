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


export default function GraficoSolidos(props) {
    const { data } = props;

    // Convertir timestamps a formatos de fecha y hora legibles
    const labels = data.map(item => new Date(item.time).toLocaleDateString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }));
    const solidity = data.map(item => item.value);

    const midata = {
        labels,
        datasets: [
            {
                label: 'tds',
                data: solidity,
                tension: 0.5,
                fill: true,
                borderColor: '#79DBAC',
                backgroundColor: '#BFFFDE',
                pointRadius: 5,
                pointBorderColor: '#79DBAC',
                pointBackgroundColor: '#79DBAC',
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
                ticks: { color: '#79DBAC' },
            },
        },
    };

   

    return <Line data={midata} options={misoptions}/>
}

