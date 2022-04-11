import Avatar from '@mui/material/Avatar';

const CgAvatar = ({src, width, height}) => {

    return (
        <Avatar src={src} alt={src} sx={{width: width, height: height}} />
    )
}

export default CgAvatar;