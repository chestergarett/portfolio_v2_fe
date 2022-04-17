import PropTypes from 'prop-types';
import CardContent from '@mui/material/CardContent';

const CgCardContent = ({ children, overflow, wNoMargin }) => {

    return (
        <CardContent 
            className={`${overflow ? `overflow-auto` : `overflow-hidden`} 
                        ${wNoMargin ? ` h-full w-full mapCard` : ` h-5/6 mapCard`}
                        flex items-center justify-center flex-col
            `}
        >
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