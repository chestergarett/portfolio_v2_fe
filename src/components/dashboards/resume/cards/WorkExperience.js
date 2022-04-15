import { useState, useEffect } from 'react';
import { getGeneralSkills } from '../../../data/api/resume/skills';
import { db } from '../../../../firebase/config';
import CgCard from '../../../ui/CgCard';
import CgAvatar from '../../../ui/CgAvatar';
import CgCardHeader from '../../../ui/CgCardHeader';
import CgCardContent from '../../../ui/CgCardContent';
import { Bar } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

const initialExperience = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [{
    data: [
        ['2022-03-01', '2022-03-03'],
        ['2022-03-03', '2022-03-06'],
        ['2022-03-07', '2022-03-09'],
        ['2022-03-07', '2022-03-09'],
        ['2022-03-16', '2022-03-21']
    ],
    icon: [],
    backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
    ],
    borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
    ],
    barPercentage: 0.2
}]
}

const initialOptions = {
responsive: true,
maintainAspectRatio: false,
indexAxis: 'y',
layout: {
    padding: 20
},
plugins: {
    legend: { 
        display: false,
    },
},
scales: {
    y:{
        display: true,
        title: {
            display: true,
            text: 'Years of Experience',
            color: 'black',
        },
        max: 10,
    },
    x:{
        ticks: {
            color: 'black',
        },
        type: 'time',
        time: {
            unit: 'day'
        },
        min: '2022-03-01'
    }
}
}

const WorkExperience = () => {
    const [experience, setExperience] = useState(initialExperience)
    const [options, setOptions] = useState(initialOptions)

    return (
        <CgCard>
            <CgCardHeader title='Work Experience'/>
            <CgCardContent overflow={false}>
                    <Bar data={experience} options={options} />
            </CgCardContent>
        </CgCard>
    )
}

export default WorkExperience;