import PropTypes from 'prop-types';
import Card from '@mui/material/Card';

const CgCard = ({children}) => {

    return (
        <Card>
            {children}
        </Card>
    )
}

CgCard.propTypes = {
    children: PropTypes.element,
}

export default CgCard;