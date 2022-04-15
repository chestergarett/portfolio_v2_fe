import { useState, useEffect } from 'react';
import { getFrameworks } from '../../../data/api/resume/skills';
import { db } from '../../../../firebase/config';
import CgCard from '../../../ui/CgCard';
import CgCardHeader from '../../../ui/CgCardHeader';
import CgCardContent from '../../../ui/CgCardContent';
import { Bar } from 'react-chartjs-2';

let image0 = new Image();
let image1 = new Image();
let image2 = new Image();
let image3 = new Image();
let image4 = new Image();
let image5 = new Image();


const initialSkills = {
        labels: [],
        datasets: [{
        data: [],
        icon: [],
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
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { 
            display: false,
        },
    },
    scales: {
        x:{
            display: true,
            title: {
                display: true,
                text: 'Years of Experience',
                color: 'black',
            },
            max: 5,
        },
        y: {
            ticks: {
                color: 'black'
            }
        }
    }
}

let plugins =  {
    id: 'horizontalBarAvatar',
    afterDatasetDraw(chart, args, options){
    const { ctx, chartArea: { top, bottom, left, right, width, height },
        scales: { x, y} } = chart;
    ctx.save();
    y.ticks.forEach( (item,index)=> {
        
        if(index===0){
            image0.src = chart.data.datasets[0].icon[index]
            ctx.drawImage(image0, x.getPixelForValue(0)+1, y.getPixelForValue(y.ticks[index].value)-(30/2), 30, 30)
        }
        if(index===1){
            image1.src = chart.data.datasets[0].icon[index]
            ctx.drawImage(image1, x.getPixelForValue(chart.data.datasets[0].data[index])+1, y.getPixelForValue(y.ticks[index].value)-(30/2), 30, 30)
        }
        if(index===2){
            image2.src = chart.data.datasets[0].icon[index]
            ctx.drawImage(image2, x.getPixelForValue(0)+1, y.getPixelForValue(y.ticks[index].value)-(30/2), 30, 30)
        }
        if(index===3){
            image3.src = chart.data.datasets[0].icon[index]
            ctx.drawImage(image3, x.getPixelForValue(chart.data.datasets[0].data[index])+1, y.getPixelForValue(y.ticks[index].value)-(30/2), 30, 30)
        }
        if(index===4){
            image4.src = chart.data.datasets[0].icon[index]
            ctx.drawImage(image4, x.getPixelForValue(0)+1, y.getPixelForValue(y.ticks[index].value)-(30/2), 30, 30)
        }
        if(index===5){
            image5.src = chart.data.datasets[0].icon[index]
            ctx.drawImage(image5, x.getPixelForValue(chart.data.datasets[0].data[index])+1, y.getPixelForValue(y.ticks[index].value)-(30/2), 30, 30)
        }
    })
    }
}

const SkillsGeneral = () => {
    const [skills, setSkills] = useState(initialSkills)
    const [options, setOptions] = useState(initialOptions)

    useEffect( ()=> {
        getFrameworks(db)
            .then(res => {
                setSkills( {...skills, labels: res.labels, datasets: [{...skills.datasets[0], data: res.data, icon: res.icon}] })
            })
            .catch(err => console.log(err))
    },[])

    return (
        <CgCard>
            <CgCardHeader title='Frameworks'/>
            <CgCardContent>
                <Bar data={skills} options={options} plugins={[plugins]}/>
            </CgCardContent>
        </CgCard>
    )
}

export default SkillsGeneral;