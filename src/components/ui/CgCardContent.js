import PropTypes from 'prop-types';
import CardContent from '@mui/material/CardContent';

const CgCardContent = ({ children }) => {

    return (
        <CardContent>
            {children}
        </CardContent>
    )
}

CgCardContent.propTypes = {
    children: PropTypes.element,
}

export default CgCardContent;