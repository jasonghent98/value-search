import React from 'react'
import classes from '../CssComponents/ProfileCard.module.css'
import { Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap'
import {profileImg} from '../Assets/Placeholder'
import Image from 'react-bootstrap/Image'

const ProfileCard = () => {

    const profileClickHandler = event => {
        console.log(event)
    }

    return (
        <div className={classes['card']}>
            <div className="image">
                <img src={profileImg} alt="" className={classes['image-profile']} onClick={profileClickHandler} id='image' />
                <input type="image" alt='image'/>
            </div>
            <h1 className={classes['profile-name']}>Your Name</h1>
            <div className={classes['description']}>
            </div>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload a Resume</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
        </div>
    )
}

export default ProfileCard; 
