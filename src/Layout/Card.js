import classes from '../CssComponents/ProfileCard.module.css'

const Card = ({children}) => {
    
    return (
        <div className={classes['card']}>
           {children}
        </div>
    )
}

export default Card; 
