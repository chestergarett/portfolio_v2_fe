import { useContext } from 'react';
import DashboardContext from '../../context/dashboardContext';
import ReactGridLayout, {Responsive, WidthProvider} from 'react-grid-layout';
import GeneralDesc from '../resume/cards/About';
import Contact from './cards/Contact';
import PdfViewer from './cards/PdfViewer';

const ResponsiveGridLayout = WidthProvider(ReactGridLayout);

const layout = [
    { i: "general-desc", x: 0, y:0, w: 6, h: 2.5, minW: 5, minH: 2, card: <GeneralDesc/>},
    { i: "contact-info", x: 0, y:5, w: 6, h: 3, minW: 5, minH: 2, card: <Contact />},
    { i: "pdf-viewer", x: 6, y:0, w: 10, h: 5.5, minW: 5, minH: 2, card: <PdfViewer />},
]


const About = () => {
    const { editMode } = useContext(DashboardContext);

    return (
        <ResponsiveGridLayout 
                layout={layout}
                // onLayoutChange={handleLayoutChange}
                cols={16}
                rowHeight={100} 
                isDraggable={editMode}
                isRearrangeable={editMode}
                isResizable={editMode}
                width={1200}
            >
                {layout.map(item => <div key={item.i} className={`${editMode ? `resizableIcon` : `` } `}>{item.card}</div>)}
        </ResponsiveGridLayout>
    )
}

export default About;