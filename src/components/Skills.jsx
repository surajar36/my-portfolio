import React, { useState } from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

// --- Skill Data Definitions ---

const dataAnalystData = {
    labels: [
        'SQL',
        'Python',
        'Power BI',
        'Excel',
        'Data Modeling',
        'Frontend Analytics',
        'Data Governance',
    ],
    datasets: [
        {
            label: 'Proficiency',
            data: [90, 80, 95, 95, 75, 85, 60],
            backgroundColor: 'rgba(26, 26, 26, 0.2)',
            borderColor: 'rgba(26, 26, 26, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(26, 26, 26, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(26, 26, 26, 1)',
        },
    ],
};

const businessAnalystData = {
    labels: [
        ['Requirements', 'Gathering'],
        ['Stakeholder', 'Management'],
        ['Process Modeling', '(BPMN)'],
        'Business Acumen',
        'Data Analysis',
        ['User Acceptance', 'Testing'],
        ['Agile/Scrum', 'Methodologies']
    ],
    datasets: [
        {
            label: 'Proficiency',
            data: [95, 95, 60, 75, 95, 80, 90], // Matched data for identical shape
            backgroundColor: 'rgba(26, 26, 26, 0.2)',
            borderColor: 'rgba(26, 26, 26, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(26, 26, 26, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(26, 26, 26, 1)',
        },
    ],
};


const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        r: {
            angleLines: { color: 'rgba(26, 26, 26, 0.2)' },
            grid: { color: 'rgba(26, 26, 26, 0.2)' },
            pointLabels: {
                font: { size: 12, family: "'Inter', sans-serif" },
                color: '#1A1A1A',
            },
            ticks: {
                backdropColor: 'transparent',
                color: 'rgba(26, 26, 26, 0.5)',
                stepSize: 25,
                beginAtZero: true,
                max: 100,
            },
        },
    },
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            callbacks: {
                label: function (context) {
                    let label = context.dataset.label || '';
                    if (label) {
                        label += ': ';
                    }
                    if (context.parsed.r !== null) {
                        label += context.parsed.r;
                    }
                    return label;
                }
            }
        }
    },
};


const Skills = () => {
    const [activeChart, setActiveChart] = useState('dataAnalyst');

    const chartData = activeChart === 'dataAnalyst' ? dataAnalystData : businessAnalystData;

    const getButtonClass = (chartName) => {
        const baseClass = "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2";
        if (activeChart === chartName) {
            return `${baseClass} bg-zinc-800 text-white shadow-md scale-105`;
        }
        return `${baseClass} bg-white text-zinc-800 border border-zinc-200 hover:bg-zinc-100`;
    };

    const description = {
        dataAnalyst: "From deep-diving into databases with SQL to crafting user-friendly frontends, I possess a balanced skill set to tackle data challenges from end to end.",
        businessAnalyst: "This chart visualizes my expertise in translating business needs into technical solutions through requirements gathering, stakeholder alignment, and process improvement."
    }

    return (
        <section id="skills" className="py-20 md:py-32 bg-[#e8dcd3]">
            <div className="container mx-auto px-4 text-center">
                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">What Skills I Have</p>
                <h2 className="text-4xl md:text-5xl font-bold font-clash text-zinc-800 mb-6">Core Competencies</h2>

                {/* --- Toggle Buttons --- */}
                <div className="flex justify-center items-center space-x-4 mb-10">
                    <button onClick={() => setActiveChart('dataAnalyst')} className={getButtonClass('dataAnalyst')}>
                        Data Analyst
                    </button>
                    <button onClick={() => setActiveChart('businessAnalyst')} className={getButtonClass('businessAnalyst')}>
                        Business Analyst
                    </button>
                </div>

                <p className="max-w-2xl mx-auto mb-12 text-zinc-600">{description[activeChart]}</p>

                <div className="chart-container relative w-full max-w-[600px] mx-auto h-[70vw] max-h-[500px] md:h-[450px]">
                    <Radar data={chartData} options={chartOptions} />
                </div>
            </div>
        </section>
    );
};

export default Skills;

