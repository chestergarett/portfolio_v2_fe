import { useState, useEffect } from 'react';
import { getProgrammingLanguages } from '../../../data/api/resume/skills';
import { db } from '../../../../firebase/config';
import CgCard from '../../../ui/CgCard';
import CgCardHeader from '../../../ui/CgCardHeader';
import CgCardContent from '../../../ui/CgCardContent';
import { Radar } from 'react-chartjs-2';

const initialSkills = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
        data: [65, 59, 80, 81, 56, 55, 40],
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
    plugins: {
        legend: { 
            display: false,
        }
    }
}

const SkillsLanguages = () => {
    const [skills, setSkills] = useState(initialSkills)
    const [options, setOptions] = useState(initialOptions)

    useEffect( ()=> {
        getProgrammingLanguages(db)
            .then(res => {
                setSkills( {...skills, labels: res.labels, datasets: [{...skills.datasets[0], data: res.data}] })
            })
            .catch(err => console.log(err))
    },[])

    return (
        <CgCard>
            <CgCardHeader title='Languages'/>
            <CgCardContent>
                <Radar data={skills} options={options} />
            </CgCardContent>
        </CgCard>
    )
}

export default SkillsLanguages;