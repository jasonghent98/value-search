import React from 'react'
import {Card, Button } from "react-bootstrap";
import classes from '../CssComponents/PopulatedSearchResult.module.css'

const PopulatedSearchResult = props => {

    // this component should render with the appropriate data from the company firestore collection
    // whenever the matchValue function has been called within the onSearchHandler

    // this component will need 
    console.log(props.valueInput)

    return (
        <div>
            <Card className={classes['recent-search']}>
                <Card.Header>Featured Search</Card.Header>
                <Card.Body>
                    <Card.Title>PlaceHolder Job Title</Card.Title>
                    <Card.Text className={classes['job-values-from-db']}>Job Values From DB</Card.Text>
                    <Button variant="primary">View Position</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PopulatedSearchResult;

// props userInput data has now been passed from app.js to recentSearch.js
// 
