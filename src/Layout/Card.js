import classes from '../CssComponents/Card.module.css'

const Card = ({children}) => {
    
    return (
        <div className={classes['card']}>
           {children}
        </div>
    )
}

export default Card; 
