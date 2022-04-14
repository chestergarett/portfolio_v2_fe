import Avatar from '@mui/material/Avatar';

const CgAvatar = ({src, width, height, variant='circular'}) => {

    return (
        <Avatar src={src} alt={src} sx={{width: width, height: height}} variant={variant}/>
    )
}

export default CgAvatar;