import CgCardContent from '../components/ui/CgCardContent';

export default {
    title: 'Components/CgCardContent',
    component: CgCardContent
}

const Template = args => <CgCardContent {...args} />

export const Text = Template.bind({})

Text.args = {
    children: <div>Big Data | Data Analysis | Web development | Machine Learning</div>
}