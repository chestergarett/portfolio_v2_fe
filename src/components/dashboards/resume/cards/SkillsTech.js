import { useState, useEffect } from 'react';
import { getTechnologies } from '../../../data/api/resume/skills';
import { db } from '../../../../firebase/config';
import CgCard from '../../../ui/CgCard';
import CgCardHeader from '../../../ui/CgCardHeader';
import CgCardContent from '../../../ui/CgCardContent';
import {AgGridReact} from 'ag-grid-react';

const initialSkills = {
        columnDefs: [
            {headerName: "Make", field: "make"},
				{headerName: "Model", field: "model"},
				{headerName: "Price", field: "price"}
        ],
        rowData: [
            {make: "Toyota", model: "Celica", price: 35000},
				{make: "Ford", model: "Mondeo", price: 32000},
				{make: "Porsche", model: "Boxter", price: 72000}
        ]
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
            <CgCardHeader title='Technologies'/>
            <CgCardContent>
                <div className="ag-theme-balham"
	                style={{
					height: '200px',
					width: '600px',
                    border: 'none'
				}}>
                <AgGridReact columnDefs={skills.columnDefs} rowData={skills.rowData} />
                </div>
            </CgCardContent>
        </CgCard>
    )
}

export default SkillsTech;