import PropTypes from 'prop-types';
import Divider from '@mui/material/Divider';
import CgAvatar from '../ui/CgAvatar';

const MultiMetricCard = ({data}) => {


    return (
        <div className="flex flex-row">
            {data ? data.map( (element,index) => 
                {
                    return (
                        <div key={index} className="flex flex-row w-1/3 items-center">
                            <div className='flex flex-col justify-items-center items-center'>
                                {element.type==='icon' ? <CgAvatar src={element.title} alt={element.title} width={50} height={50} /> : <div>{element.title}</div>}
                                <div className="mt-3 font-bold text-base">{element.subtitle1}</div>
                                <div className="text-slate-500 text-sm">{element.subtitle2}</div>
                                <div className="text-slate-400 text-xs">{element.subtitle3}</div>
                            </div>
                            {(index === data.length-1) ? '' : <div className="divider"/>}    
                        </div>
                    )
                }
            ) : ''}
        </div>
    )
}

MultiMetricCard.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object)
}

export default MultiMetricCard;