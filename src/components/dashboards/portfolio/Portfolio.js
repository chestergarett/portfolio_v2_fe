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
            <ResponsiveGridLayout 
                layout={savedLayout ? JSON.parse(savedLayout) : layout}
                onLayoutChange={handleLayoutChange}
                cols={16}
                // layout={{ lg : savedLayout ? JSON.parse(savedLayout) : layout}}
                // breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                // cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
                rowHeight={100} 
                isDraggable={editMode}
                isRearrangeable={editMode}
                isResizable={editMode}
                width={1200}
            >
                {layout.map(item => <div key={item.i} className={`${editMode ? `resizableIcon` : `` } `}>{item.card}</div>)}
            </ResponsiveGridLayout>
        </div>
        // <div>This is portfolio page</div>
    )
}

export default Portfolio;