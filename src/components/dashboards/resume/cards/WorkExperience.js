import { useState, useEffect } from 'react';
import { getWorkExperiences } from '../../../data/api/resume/workExperience';
import { db } from '../../../../firebase/config';
import CgCard from '../../../ui/CgCard';
import CgAvatar from '../../../ui/CgAvatar';
import CgCardHeader from '../../../ui/CgCardHeader';
import CgCardContent from '../../../ui/CgCardContent';
import { Bar } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { format } from 'date-fns'

const initialExperience = {
    labels: [],
    datasets: [{
    data: [],
    icon: [],
    backgroundColor: [
        'rgb(0,0,0)',
        'rgb(255, 205, 86)',
        'rgb(30,144,255)',
    ],
    borderColor: [
        'rgb(0,0,0)',
        'rgb(255, 205, 86)',
        'rgb(30,144,255)',
    ],
    barPercentage: 0.4
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
        tooltip: {
            callbacks: {
                label: function(context){
                    let label = `${format(new Date(context.raw[0]), 'LLL yyyy')} - ${format(new Date(context.raw[1]), 'LLL yyyy')}`;
                    
                    return label
                }
            }
        }
    },
    scales: {
        y:{
            display: true,
            title: {
                display: false,
            },
            ticks: {
                color: 'black'
            },
            grid: {
                borderDash: [5,5]
            }
        },
        x:{
            type: 'time',
            // offset: false,
            time: {
                unit: 'year'
            },
            min: '2016-12-16',
            ticks: {
                autoSkip: true,
                maxTicksLimit: 10,
                align: 'start',
                maxRotation: 90,
                minRotation: 0
            },
            grid: {
                borderDash: [5,5]
            }
        }
    }
}

const WorkExperience = () => {
    const [experience, setExperience] = useState(initialExperience)
    const [options, setOptions] = useState(initialOptions)

    useEffect( ()=>{
        getWorkExperiences(db)
            .then(
                res => {
                    setExperience( {...experience, labels: res.labels, datasets: [{...experience.datasets[0], data: res.data}] })
                }
            )
            .catch(error => console.log(error))
    },[])

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