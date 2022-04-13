import PropTypes from 'prop-types';
import Card from '@mui/material/Card';

const CgCard = ({children}) => {

    return (
        <Card className="h-full w-full">
            {children}
        </Card>
    )
}

CgCard.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
}

export default CgCard;