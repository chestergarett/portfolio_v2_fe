import {Responsive, WidthProvider} from 'react-grid-layout';
import About from './cards/About';

const layout = [
    { i: "about", x: 0, y:0, w: 1, h: 1},
    { i: "education", x: 1, y:0, w: 1, h: 1},
    { i: "licenses", x: 2, y:0, w: 1, h: 1},
    { i: "workExperience", x: 3, y:0, w: 1, h: 1},
    { i: "skills", x: 4, y:0, w: 5, h: 1},
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
                <About key='about'/>
            </ResponsiveGridLayout>
        </div>
    )
}

export default Resume;