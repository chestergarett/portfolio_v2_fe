import CgButton from '../components/ui/CgButton';

export default {
    title: 'Components/CgButton',
    component: CgButton,
    argTypes: { handleClick: { action: "handleClick" }}
}

const Template = args => <CgButton {...args} />

export const Contained = Template.bind({})
Contained.args = {
    variant: 'contained', 
    label: 'Press Me',
    color: 'primary', 
    disabled: false,
}

export const Outlined = Template.bind({})
Outlined.args = {
    variant: 'outline', 
    label: 'Press Me',
    color: 'primary', 
    disabled: false,
}