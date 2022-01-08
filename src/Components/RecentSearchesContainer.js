import React from 'react'
import classes from '../CssComponents/RecentSearchesContainer.module.css'
import PopulatedSearchCard from './PopulatedSearchCard'
import {Card} from 'react-bootstrap'

const RecentSearchesContainer = props => {
    
    return (
        <Card className={classes['card']}>
            <h4 className={classes.title}>Your Recent Searches</h4>
            {/* {props.userSearches.map((userSearch) => {
                return <RecentSearch jobTitleInput={userSearch.jobTitleInput} valueInput={userSearch.valueInput}/>
            })} */}
        </Card>
    )
}

export default RecentSearchesContainer;

// here I need to map over the userSearches array and for each userSearch in it, create a new recentSearch component that will render 
// on recentSearchesContainer