import { useState, useEffect } from 'react';
import { getGeneralSkills } from '../../../data/api/resume/skills';
import { db } from '../../../../firebase/config';
import CgCard from '../../../ui/CgCard';
import CgAvatar from '../../../ui/CgAvatar';
import CgCardHeader from '../../../ui/CgCardHeader';
import CgCardContent from '../../../ui/CgCardContent';
import { Bar } from 'react-chartjs-2';

let image = new Image();
image.src ='https://firebasestorage.googleapis.com/v0/b/portfolioapp-348a9.appspot.com/o/star-icon-flat-354483.png?alt=media&token=57a7cc51-ab66-4200-9910-71b39c64aeee';

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
    responsive: true,
    maintainAspectRatio: false,
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
            }
        }
    }
}

let plugins =  {
        id: 'barAvatar',
    afterDatasetDraw(chart, args, options){
        const { ctx, chartArea: { top, bottom, left, right, width, height },
            scales: { x, y} } = chart;
        ctx.save();
        x.ticks.forEach( (item,index)=> {
                if(item.label==='Data Engineering' || item.label==='Web Development' || item.label==='Data Analysis'){
                    ctx.drawImage(image, x.getPixelForValue(index) - (30/2), y.getPixelForValue(chart.data.datasets[0].data[index])-25, 20, 20)
                }
            
        })
        }
}

const SkillsGeneral = () => {
    const [skills, setSkills] = useState(initialSkills)
    const [options, setOptions] = useState(initialOptions)
    const [loading, setIsLoading] = useState(false)
    
    useEffect( ()=> {
        setIsLoading(true);
        getGeneralSkills(db)
            .then(res => {
                setSkills( {...skills, labels: res.labels, datasets: [{...skills.datasets[0], data: res.data, icon: res.icon}] });
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            })
    },[])

    return (
        <CgCard>
            <CgCardHeader title='General Skills'/>
            <CgCardContent overflow={false}>
                    {!loading ? <><Bar data={skills} options={options} plugins={[plugins]} />
                    <div className="inline-flex items-center justify-center text-xs text-slate-500 -mt-7">
                        <CgAvatar 
                            src="https://firebasestorage.googleapis.com/v0/b/portfolioapp-348a9.appspot.com/o/star-icon-flat-354483.png?alt=media&token=57a7cc51-ab66-4200-9910-71b39c64aeee" 
                            alt="custom_legend"
                            width={20}
                            height={20}
                        />
                        <span>Looking to grow in these domains</span>
                    </div></> : 'Loading data'}
            </CgCardContent>
        </CgCard>
    )
}

export default SkillsGeneral;