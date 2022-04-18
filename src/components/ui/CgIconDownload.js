import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const CgIconDownload = ({fontSize, link}) => {

    return (
        <Tooltip title="Download">
            <a href={link} download target="_blank">
                <CloudDownloadIcon style={{fontSize: `${fontSize}` }} className="text-gray-400"/>
            </a>
        </Tooltip>
    )
}

export default CgIconDownload;