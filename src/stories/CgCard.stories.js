import CgCard from '../components/ui/CgCard';
import CgCardHeader from '../components/ui/CgCardHeader';
import CgCardContent from '../components/ui/CgCardContent';

export default {
    title: 'Components/CgCard',
    component: CgCard
}

const children = <div>Big Data | Machine Learning </div>
const Template = args => <CgCard {...args} />

export const Text = Template.bind({})

Text.args = {
    children: 
        <div>
            <CgCardHeader title='About'/>
            <CgCardContent children={children}/>
        </div>
}