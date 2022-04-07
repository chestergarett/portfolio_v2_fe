import CgList from '../components/ui/CgList';

export default {
    title: 'Components/CgList',
    component: CgList
}

const Template = args => <CgList {...args} />

export const WorkExperience = Template.bind({})
WorkExperience.args = {
    data: [
        {
            img: './assets/icons8-javascript-48.png',
            company: 'Bluefletch',
            fullDate: 'Dec 2021 - Present',
            subExperience: [
            {position:'Data Engineer', fullDate:'Dec 2021 - Present', description: ['Doing random stuff', 'Doing more random stuff'] },
            ]
        },
        {
            img: './assets/icons8-javascript-48.png',
            company: 'EY',
            fullDate: 'Dec 2016 to Dec 2021',
            subExperience: [
            {position:'Assistant Manager', fullDate:'Oct 2021 - Dec 2021', description: ['SQL, Python', 'Pandas, Power Platform'] },
            {position:'Senior Data Analyst', fullDate:'Sep 2020 - Oct 2021', description: ['SQL, Python', 'Pandas, Power Platform']  },
            {position:'Associate Data Analyst', fullDate:'Jul 2019 - Aug 2020', description: ['SQL, Python', 'Pandas, Power Platform']  }
            ]
        }
    ],
    type: 'workExperience'
}

export const Education = Template.bind({})
Education.args = {
    data:[
        {
            img: './assets/icons8-javascript-48.png', 
            school: 'Avion School', 
            course: 'Full Stack Web Development', 
            fullDate: 'Apr 2021 - Nov 2021'
        },
        {
            img: './assets/icons8-javascript-48.png', 
            school: 'Silliman University', 
            course: 'Bachelor of Science in Accountancy', 
            fullDate: '2011 - 2016'
        },
    ],
    type: 'education'
}

export const Licenses = Template.bind({})
Licenses.args = {
    data: [
        {
            img: './assets/icons8-javascript-48.png',
            license: 'EY Data Strategy',
            company: 'EY',
            fullDate: 'Jun 2021',
        },
        {
            img: './assets/icons8-javascript-48.png',
            license: 'EY Analytics',
            company: 'EY',
            fullDate: 'Dec 2019',
        },
    ],
    type: 'licenses'
}

export const Skills = Template.bind({})
Skills.args = {
    data: [
        {
            skill: 'React',
        },
        {
            skill: 'Node',
        },
    ],
    type: 'skills'
}


