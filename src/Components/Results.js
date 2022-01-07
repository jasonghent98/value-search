import React from 'react'
import SearchFormContainer from './SearchFormContainer';
import RecentSearchesContainer from './RecentSearchesContainer';
import Result from './Result';
import classes from '../CssComponents/Results.module.css'

const Results = () => {
    return (
        <div>
            <SearchFormContainer/>
            <div className={classes['result']}>
                <Result/>
            </div>
        </div>
    )
}

export default Results;