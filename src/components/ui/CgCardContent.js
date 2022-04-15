import PropTypes from 'prop-types';
import CardContent from '@mui/material/CardContent';

const CgCardContent = ({ children, overflow }) => {

    return (
        <CardContent className={`${overflow ? `overflow-auto` : `overflow-hidden`} h-5/6`}>
            {children}
        </CardContent>
    )
}

CgCardContent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
}

export default CgCardContent;