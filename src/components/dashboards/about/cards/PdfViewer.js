import { useState,useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { db } from '../../../../firebase/config';
import { getPdf } from '../../../data/api/about/pdfviewer';
import CgCard from '../../../ui/CgCard';
import CgCardHeader from '../../../ui/CgCardHeader';
import CgCardContent from '../../../ui/CgCardContent';
import CgIconDownload from '../../../ui/CgIconDownload';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const PdfViewer = () => {
    const [file, setFile] = useState(null);

    useEffect( ()=> {
        getPdf(db)
        .then(res=>setFile(res))
        .catch(err=>console.log(err))
    },[])

    return (
        <CgCard>
            <CgCardHeader title="Resume" icon={<CgIconDownload link={file}/>} wIcon/>
            <CgCardContent wNoMargin>
                <div className="h-full w-full overflow-auto flex justify-center">
                    <Document file={file}>
                        <Page pageNumber={1}/>
                    </Document>
                </div>
            </CgCardContent>
        </CgCard>
    )
}

export default PdfViewer;