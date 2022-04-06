import CgCardHeader from '../components/ui/CgCardHeader';

export default {
    title: 'Components/CgCardHeader',
    component: CgCardHeader
}

const Template = args => <CgCardHeader {...args} />

export const Header = Template.bind({})

Header.args = {
    title: 'About'
}