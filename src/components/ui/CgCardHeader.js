import PropTypes from 'prop-types';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';

const CgCardHeader = ({ title, subtitle }) => {

        return (
            <>
                <CardHeader title={title} subtitle={subtitle} />
                <Divider />
            </>
        )
}

CgCardHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default CgCardHeader;