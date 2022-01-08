import React from 'react'
import SearchFormContainer from './SearchFormContainer';
import RecentSearchesContainer from './RecentSearchesContainer';
import PopulatedSearchResult from './PopulatedSearchCard';
import classes from '../CssComponents/Results.module.css'

const Results = () => {
    return (
        <div>
            <SearchFormContainer/>
            <div className={classes['result']}>
                <PopulatedSearchResult/>
            </div>
        </div>
    )
}

export default Results;