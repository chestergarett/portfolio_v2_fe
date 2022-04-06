import PropTypes from 'prop-types';
import CardHeader from '@mui/material/CardHeader';

const CgCardHeader = ({ title, subtitle }) => {

        return (
            <CardHeader title={title} subtitle={subtitle} />
        )
}

CgCardHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default CgCardHeader;