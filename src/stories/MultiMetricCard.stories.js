import MultiMetricCard from '../components/charts/MultiMetricCard';

export default {
    title: 'Components/Charts/MultiMetricCard',
    component: MultiMetricCard
}

const Template = args => <MultiMetricCard {...args} />

export const Metrics = Template.bind({})
Metrics.args = {
    data: [
        {title: 'icon', subtitle1: 'Silliman University', subtitle2: 'BS Accountancy', subtitle3: '2011-2016'},
        {title: 'icon', subtitle1: 'St Paul University', subtitle2: 'High School', subtitle3: '2006-2011'},
    ]
}

export const MetricIcons = Template.bind({})
MetricIcons.args = {
    data: [
        {title: 'icon', subtitle1: 'Silliman University', subtitle2: 'BS Accountancy', subtitle3: '2011-2016', type: 'icon'},
        {title: 'icon', subtitle1: 'St Paul University', subtitle2: 'High School', subtitle3: '2006-2011', type: 'icon'},
    ]
}