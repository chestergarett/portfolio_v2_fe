import { useContext } from 'react';
import DashboardContext from '../../context/dashboardContext';
import ReactGridLayout, {Responsive, WidthProvider} from 'react-grid-layout';
import About from './cards/About';
import SkillsGeneral from './cards/SkillsGeneral';
import SkillsLanguages from './cards/SkillsLanguages';
import SkillsFrameworks from './cards/SkillsFrameworks';
import SkillsTech from './cards/SkillsTech';
import WorkExperience from './cards/WorkExperience';
import WorkLocation from './cards/WorkLocation';
import Education from './cards/Education';

const layout = [
    { i: "about", x: 0, y:0, w: 5, h: 2, minW: 5, minH: 2, card: <About/>},
    { i: "skills-general", x: 5, y:0, w: 11, h: 3, minW: 5, minH: 2, card: <SkillsGeneral/>},
    { i: "skills-languages", x: 0, y:2, w: 5, h: 5, minW:5, minH: 4, card: <SkillsLanguages/>},
    { i: "skills-frameworks", x: 5, y:3, w: 5, h: 4, minW: 5, minH: 2, card: <SkillsFrameworks/>},
    { i: "skills-tech", x: 10, y:3, w: 6, h: 4, minW: 6, minH: 2, card: <SkillsTech/>},
    { i: "work-exp", x: 0, y:7, w: 8, h: 3, minW: 4, minH: 2, card: <WorkExperience/>},
    { i: "work-location", x: 8, y:7, w: 8, h: 6, minW: 8, minH: 4, card: <WorkLocation/>},
    { i: "education", x: 0, y:10, w: 8, h: 3, minW: 6, minH: 2, card: <Education />},
]

const ResponsiveGridLayout = WidthProvider(ReactGridLayout);

const handleLayoutChange = (layout, layouts) => {
    localStorage.setItem("grid-layout", JSON.stringify(layout));
};

const savedLayout = localStorage.getItem("grid-layout");

const Resume = () => {
    const { editMode } = useContext(DashboardContext);
    
    return(
        <div className='p4'>
            <ResponsiveGridLayout 
                layout={savedLayout ? JSON.parse(savedLayout) : layout}
                onLayoutChange={handleLayoutChange}
                cols={16}
                rowHeight={100} 
                isDraggable={editMode}
                isRearrangeable={editMode}
                isResizable={editMode}
                width={1200}
            >
                {layout.map(item => <div key={item.i} className={`${editMode ? `resizableIcon` : `` } `}>{item.card}</div>)}
            </ResponsiveGridLayout>
        </div>
    )
}

export default Resume;