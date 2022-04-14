import { useState, useEffect } from 'react';
import { getTechnologies } from '../../../data/api/resume/skills';
import { db } from '../../../../firebase/config';
import CgCard from '../../../ui/CgCard';
import CgCardHeader from '../../../ui/CgCardHeader';
import CgCardContent from '../../../ui/CgCardContent';
import {AgGridReact} from 'ag-grid-react';

const initialSkills = {
        columnDefs: [],
        rowData: []
}

const SkillsTech = () => {
    const [skills, setSkills] = useState(initialSkills)

    useEffect( ()=> {
        getTechnologies(db)
            .then(res => {
                setSkills( {...skills, columnDefs: res.columnDefs, rowData: res.data })
            })
            .catch(err => console.log(err))
    },[])

    return (
        <CgCard>
            <CgCardHeader title='Cloud & Low Code Apps'/>
            <CgCardContent>
                <div className="ag-theme-material h-full w-full">
                <AgGridReact 
                    columnDefs={skills.columnDefs} 
                    rowData={skills.rowData} 
                    enableSorting={true}
                    // enableFilter={true}
                    enableColResize={true}
                    defaultColDef={{
                        resizable: true,
                        sortable: true,
                        // filter: true,
                        // menuTabs: ['generalMenuTab', 'filterMenuTab'],
                    }}
                    className="text-left overflow-auto"
                />
                </div>
            </CgCardContent>
        </CgCard>
    )
}

export default SkillsTech;