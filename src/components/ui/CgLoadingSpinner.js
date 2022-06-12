//css
import classes from './CgLoadingSpinner.module.css';
import classesDark from './CgLoadingSpinnerDark.module.css';

const LoadingSpinner = ({dark}) => {
    return (
        <>
        {dark ? 
            <div className={classesDark.spinner}>
                <div className={classesDark.bounce1}></div>
                <div className={classesDark.bounce2}></div>
                <div className={classesDark.bounce3}></div>
            </div> :
            <div className={classes.spinner}>
                <div className={classes.bounce1}></div>
                <div className={classes.bounce2}></div>
                <div className={classes.bounce3}></div>
            </div>
        }
        </>
    )
}

export default LoadingSpinner;