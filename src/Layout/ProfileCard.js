import React from 'react'
import classes from '../CssComponents/ProfileCard.module.css'
import { Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap'
import {profileImg} from '../Assets/Placeholder'

const ProfileCard = () => {
    return (
        <div className={classes['card']}>
            <div className="image">
                <img src={profileImg} alt="" className={classes['image-profile']} />
            </div>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload a Resume</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
            this is card
        </div>
    )
}

export default ProfileCard; 
