import React from 'react'
import {Card, Button } from "react-bootstrap";
import classes from '../CssComponents/RecentSearch.module.css'

const RecentSearch = props => {

    return (
        <div>
            <Card className={classes['recent-search']}>
                <Card.Header>Featured Search</Card.Header>
                <Card.Body>
                    <Card.Title>{props.jobTitleInput}</Card.Title>
                    <Card.Text>
                    {props.valueInput}
                    </Card.Text>
                    <Button variant="primary">View Position</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default RecentSearch;

// props userInput data has now been passed from app.js to recentSearch.js
// 
