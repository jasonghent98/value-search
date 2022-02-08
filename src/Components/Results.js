import React, {useEffect} from 'react'
import SearchFormContainer from './SearchFormContainer';
import PopulatedSearchResult from './PopulatedSearchCard';
import classes from '../CssComponents/Results.module.css'
import { companyRef } from '../API/Firebase';
import { getDocs, where, query } from 'firebase/firestore';

const Results = props => {

    const userInput = props.location.state.finalizedInput;
    const {valueInput} = userInput;


    useEffect(() => {
        // API call to match values from user input to DB
        // const q = query(companyRef, where('companyValues', '==', 'ownership'));
        // getDocs(q).then(results => {console.log(results)})
        const query = getDocs(companyRef).then(snapshot => {
            const data = snapshot.docs.map(doc => {return doc.data()})
            const companyValuesArr = data.map(doc => {return doc.companyValues});
            // filter over each of the companyArr and pull the ones that match with at least one value from user input
            companyValuesArr.filter(doc => {
                const check = doc.includes(valueInput) ? doc : false;
                console.log(check)
            })
        });

        return () => {
            console.log('cleanup')
        }
    })

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