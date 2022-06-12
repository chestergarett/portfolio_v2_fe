import { useState, useEffect } from 'react';
import AceEditor  from 'react-ace';
import axios from 'axios';
import qs from 'qs';
import 'ace-builds/src-noconflict/mode-sql';
import 'ace-builds/src-noconflict/theme-chrome';
import {AgGridReact} from 'ag-grid-react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import InfoIcon from '@mui/icons-material/Info';
//components
import Tables from './components/Tables';
import CgModal from '../ui/CgModal';
import LoadingSpinner from '../ui/CgLoadingSpinner';

const header = '--Run your queries here \n--Query data from the list of Tables \n \n';
const initialQuery = 'select * from work_experience';
const initialState = `${header} ${initialQuery}`;
const initialResult = {
    columnDefs: [],
    rowData: [],
}

const QueryButtons = ( {onRun, onInfo, isLoading} ) => {
    return (
        <>
            <Button 
                sx={{mr: 1, 
                    backgroundColor: 'var(--blue-primary)', 
                    color: 'var(--white-primary)',
                    '&:hover': {
                        backgroundColor: 'var(--blue-secondary)', 
                        color: 'var(--white-primary)',
                    }}}
                onClick={onRun}
            >
                {isLoading ? <LoadingSpinner/> : <><PlayCircleIcon className="mr-2"/> Run</>}
            </Button>
            <Button sx={{
                    backgroundColor: 'var(--blue-primary)', 
                    color: 'var(--white-primary)',
                    '&:hover': {
                        backgroundColor: 'var(--blue-secondary)', 
                        color: 'var(--white-primary)',}
                }}
                onClick={onInfo}
            >
                <InfoIcon className="mr-2"/>Info
            </Button>
        </>
    )
}

const QueryTool = () => {
    const [query, setQuery] = useState(initialState);
    const [result, setResult] = useState(initialResult);
    const [error, setError] = useState(null);
    const [tableList, setTableList] = useState([]);
    const [open, setOpen ] = useState(false);
    const [openError, setOpenError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [tableIsLoading, setTableIsLoading] = useState(false);
    
    useEffect( ()=> {
        setTableIsLoading(true);
        axios.get(`${process.env.REACT_APP_QUERY_TOOL}/sqlExplorer/tables`)
        .then(res=>{
            setTableIsLoading(false);
            setTableList(res.data);
        })
        .catch(err=>{
            setTableIsLoading(false);
            console.error(err);
        })
    },[])

    const handleClose = () => setOpen(false);
    const handleCloseError = () => setOpenError(false);
    
    const onQueryChange = data => {
        setQuery(data);
    };

    const onQueryResponse = response => {
        let keys = Object.keys(response[0]);

        if(keys.indexOf('__key__')!==-1){
            keys.splice(keys.indexOf('__key__'),1)
        }

        if(keys.indexOf('__key__')!==-1){
            keys.splice(keys.indexOf('__key__'),1)
        }

        if(keys.indexOf('__error__')!==-1){
            keys.splice(keys.indexOf('__error__'),1)
        }

        if(keys.indexOf('__has_error__')!==-1){
            keys.splice(keys.indexOf('__has_error__'),1)
        }

        let headerNames = [];
        keys.forEach(key => {
            headerNames.push({headerName: key, field: key})
        })
        headerNames.unshift({ headerName: 'row', field: 'row', width: 100 });
    
        let rowData = [];
        let rowNumber = 1;
        response.forEach(row => {
            let newRow = {};
            for(var key in row){
                if(row.hasOwnProperty(key)){
                    if(Array.isArray(row[key])){
                        newRow = { ...newRow, [key] : JSON.stringify(row[key]) }
                    }else{
                        newRow = { ...newRow, [key] : row[key]} 
                    }
                }
            }
            newRow= { ...newRow, row: rowNumber };
            rowNumber++;
            rowData.push(newRow);
        })

        setResult({columnDefs: headerNames, rowData: rowData});
    }
    
    const onRun = () => {
        setIsLoading(true);
        const stringifyQuery = {
            "query": query,
        };
        axios.post(`${process.env.REACT_APP_QUERY_TOOL}/sqlExplorer/query`, qs.stringify(stringifyQuery))
        .then( res => {
            setIsLoading(false);
            onQueryResponse(res.data);
        })
        .catch( err => {
            setIsLoading(false);
            setOpenError(true);
            setError(err.message);
        });
    };

    const onInfo = () => {
        setOpen(true);
    }

    return (
        <>
        <div className="flex h-full">
            <div className="flex-col flex-initial w-1/6 h-full mr-2">
                <Typography variant="h6" component="div" sx={{marginTop: '13px'}}>TABLES</Typography>
                <Tables data={tableList} isLoading={tableIsLoading}/>
            </div>
            <div className="flex-initial w-5/6 h-full">
                <div className="flex w-full justify-end mb-2">
                    <QueryButtons onRun={onRun} onInfo={onInfo} isLoading={isLoading}/>
                </div>
                <AceEditor
                    mode="sql"
                    theme="chrome"
                    showGutter={false}
                    enableBasicAutocompletion={true}
                    enableLiveAutocompletion={true}
                    showPrintMargin={false}
                    highlightActiveLine={false}
                    height="240px"
                    width="100%"
                    onChange={onQueryChange}
                    name="sql-editor"
                    value={query}
                />
                <div className="ag-theme-material h-1/2 w-full">
                    <AgGridReact 
                        columnDefs={result.columnDefs} 
                        rowData={result.rowData} 
                        enableSorting={true}
                        // enableFilter={true}
                        enableColResize={true}
                        defaultColDef={{
                            resizable: true,
                            sortable: true,
                            // filter: true,
                            // menuTabs: ['generalMenuTab', 'filterMenuTab'],
                        }}
                        className="text-left overflow-auto mt-2"
                    />
                </div>
            </div>
        </div>
        {open ? 
            <CgModal 
                open={open} 
                handleClose={handleClose} 
                title={'Data Flow'} 
                message={
                    <span>The flow of data in this web app are as follows: <br/><br/>
                    1) Datasets stored at Firebase Firestore <br/><br/>
                    2) BigQuery as data warehouse of data from Firebase<br/><br/>
                    3) Node endpoint to access BigQuery API deployed in GCP Cloud Functions <br/><br/>
                    4) Data from Node API consumed by Frontend React App
                    </span>
                }
            /> 
        : ''}
        {openError ? 
            <CgModal 
                open={openError} 
                handleClose={handleCloseError} 
                title={'Please double check your query.'} 
                message={error}
            /> 
        : ''}
        </>
    )
}

export default QueryTool;