import { useState, useEffect } from 'react';
import { getGeneralSkills } from '../../../data/api/resume/skills';
import { db } from '../../../../firebase/config';
import CgCard from '../../../ui/CgCard';
import CgCardHeader from '../../../ui/CgCardHeader';
import CgCardContent from '../../../ui/CgCardContent';
import { Bar } from 'react-chartjs-2';


let image = new Image();
image.src ='https://www.chartjs.org/img/chartjs-logo.svg';

const initialSkills = {
        labels: [],
        datasets: [{
        data: [],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
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
        borderWidth: 1
    }]
}

const initialOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
        padding: 20
    },
    plugins: {
        legend: { 
            display: false,
        }
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
            }
        }
    }
}

const barAvatar = {
    id: 'barAvatar',
    afterDatasetDraw(chart, args, options){
        const { ctx, chartArea: { top, bottom, left, right, width, height },
            scales: { x, y} } = chart;
        ctx.save();

        ctx.drawImage(image, x.getPixelForValue(0) - (30/2), y.getPixelForValue(5)-30, 30, 30);
        ctx.drawImage(image, x.getPixelForValue(1) - (30/2), y.getPixelForValue(1)-30, 30, 30);
    }

}

const SkillsGeneral = () => {
    const [skills, setSkills] = useState(initialSkills)
    const [options, setOptions] = useState(initialOptions)

    useEffect( ()=> {
        getGeneralSkills(db)
            .then(res => {
                setSkills( {...skills, labels: res.labels, datasets: [{...skills.datasets[0], data: res.data}] })
            })
            .catch(err => console.log(err))
    },[])

   

    return (
        <CgCard>
            <CgCardHeader title='General Skills'/>
            <CgCardContent>
                <Bar data={skills} options={options} plugins={[barAvatar]}/>
            </CgCardContent>
        </CgCard>
    )
}

export default SkillsGeneral;