import {Responsive, WidthProvider} from 'react-grid-layout';
import About from './cards/About';
import SkillsGeneral from './cards/SkillsGeneral';
import SkillsLanguages from './cards/SkillsLanguages';
import SkillsFrameworks from './cards/SkillsFrameworks';
import SkillsTech from './cards/SkillsTech';

const layout = [
    { i: "about", x: 1, y:0, w: 3, h: 3},
    { i: "skills-general", x: 3, y:0, w: 3, h: 1},
    { i: "skills-languages", x: 2, y:0, w: 1, h: 1},
    { i: "skills-frameworks", x: 3, y:0, w: 1, h: 1},
    { i: "skills-tech", x: 4, y:0, w: 5, h: 1},
]

const ResponsiveGridLayout = WidthProvider(Responsive);

const Resume = () => {
    
    return(
        <div className='p4'>
            <ResponsiveGridLayout 
                layout={layout}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }} 
                rowHeight={300} 
                isDraggable
                isRearrangeable
                isResizable
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
            </ResponsiveGridLayout>
        </div>
    )
}

export default Resume;