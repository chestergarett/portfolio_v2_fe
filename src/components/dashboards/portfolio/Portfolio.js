import { useContext } from 'react';
import DashboardContext from '../../context/dashboardContext';
import ReactGridLayout, {Responsive, WidthProvider} from 'react-grid-layout';
import Project from './cards/Project';

const layout = [
    { i: "project", x: 0, y:0, w: 16, h: 6, minW: 16, minH: 6, card: <Project/>},
]

const ResponsiveGridLayout = WidthProvider(ReactGridLayout);

const handleLayoutChange = (layout, layouts) => {
    localStorage.setItem("grid-layout", JSON.stringify(layout));
};

const savedLayout = localStorage.getItem("grid-layout");

const Portfolio = () => {
    const { editMode } = useContext(DashboardContext);
    
    return(
        <div className='p4'>
            {layout.map(item => <div key={item.i} className={`${editMode ? `resizableIcon` : `` } `}>{item.card}</div>)}
        </div>
        // <div>This is portfolio page</div>
    )
}

export default Portfolio;