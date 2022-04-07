import CgAppbar from '../components/ui/CgAppbar';

export default {
    title: 'Components/CgAppbar',
    component: CgAppbar
}

const Template = args => <CgAppbar {...args} />

export const Text = Template.bind({})

Text.args = {
    data: [
        {name: 'HOME'},
        {name: 'ABOUT'},
    ]
}