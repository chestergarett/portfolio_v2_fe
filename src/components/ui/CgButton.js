import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

const CgButton = ({ label, variant = 'contained', disabled = false, handleClick, size='medium', color='primary' }) => {

    return (
        <Button variant={variant} disabled={disabled} size={size} onClick={handleClick} color={color}>
            {label}
        </Button>
    )
}

CgButton.propTypes = {
    label: PropTypes.string,
    variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'success', 'error', 'info']),
    disabled: PropTypes.bool,
    handleClick: PropTypes.func
}

export default CgButton;