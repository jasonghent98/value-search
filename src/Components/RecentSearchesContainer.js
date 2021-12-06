import React from 'react'
import classes from '../CssComponents/RecentSearchesContainer.module.css'
import RecentSearch from './RecentSearch'
import {Card} from 'react-bootstrap'

const RecentSearchesContainer = props => {
    
    return (
        <Card className={classes['card']}>
            <h4 className={classes.title}>Your Recent Searches</h4>
            <RecentSearch/>
        </Card>
    )
}

export default RecentSearchesContainer;
