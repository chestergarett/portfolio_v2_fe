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
    { i: "about", x: 0, y:0, w: 5, h: 1, minW: 5},
    { i: "skills-general", x: 5, y:0, w: 11, h: 2,},
    { i: "skills-languages", x: 0, y:6, w: 5, h: 4},
    { i: "skills-frameworks", x: 5, y:6, w: 5, h: 3},
    { i: "skills-tech", x: 10, y:12, w: 6, h: 3},
    { i: "work-exp", x: 0, y:10, w: 8, h: 2},
    { i: "work-location", x: 8, y:20, w: 8, h: 4},
    { i: "education", x: 0, y:10, w: 8, h: 2},
]

const ResponsiveGridLayout = WidthProvider(ReactGridLayout);

const Resume = () => {
    
    return(
        <div className='p4'>
            <ResponsiveGridLayout 
                layout={layout}
                // breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                // cols={{ lg: 16, md: 16, sm: 12, xs: 10, xxs: 1 }} 
                // breakpoints={{lg: 1200}}
                cols={16}
                // cols={16}
                rowHeight={150} 
                isDraggable={false}
                isRearrangeable={false}
                isResizable={false}
                width={1200}
                onBreakPointChange={(e)=>{console.log(e)}}
            >
                <div key='about'>
                    <About />
                </div>
                <div key='skills-general'>
                    <SkillsGeneral/>
                </div>
                <div key='skills-languages'>
                    <SkillsLanguages />
                </div>
                <div key='skills-frameworks'>
                    <SkillsFrameworks />
                </div>
                <div key='skills-tech'>
                    <SkillsTech />
                </div>
                <div key='work-exp'>
                    <WorkExperience />
                </div>
                <div key='work-location'>
                    <WorkLocation />
                </div>
                <div key='education'>
                    <Education />
                </div>
            </ResponsiveGridLayout>
        </div>
    )
}

export default Resume;