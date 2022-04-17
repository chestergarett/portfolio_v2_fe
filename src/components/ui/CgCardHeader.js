import PropTypes from 'prop-types';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';

const CgCardHeader = ({ title, subtitle }) => {

        return (
            <>
                <div className="overflow scroll h-5 p-5 flex items-center justify-items-start font-bold cardHeader">
                    {title}
                </div>
                <Divider />
            </>
        )
}

CgCardHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default CgCardHeader;