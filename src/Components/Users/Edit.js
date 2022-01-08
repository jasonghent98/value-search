import Card from "../../Layout/Card";
import { Form, Button } from "react-bootstrap";
import { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import classes from '../../CssComponents/Edit.module.css'

// firestore access
import { addDoc, setDoc, doc } from "@firebase/firestore";
import {addData, db, users1Ref, userRef} from '../../API/Firebase'

const Edit = () => {
    // initialize refs to listen for inputs 
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const profileImgRef = useRef();
    const valuesRef = useRef();
    const experienceRef = useRef();

    const history = useHistory();

    // create an onSubmitHandler that will handle form data
    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log('before')
        addData()
        console.log('after')
        try {
            const editData = {
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
                profileImg: profileImgRef.current.value,
                values: valuesRef.current.value,
                experience: experienceRef.current.value
            }
            addDoc(users1Ref, editData).then(res => console.log(res)).catch(err => console.log(err));
            
        } catch (error) {
            console.log(error)
        }
        history.push('/profile')
    }


    return (
        <Card>
            <Form className={classes['form']} onSubmit={onSubmitHandler}>
                <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" ref={firstNameRef} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" ref={lastNameRef} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formProfileImages">
                    <Form.Label>Profile Image</Form.Label>
                    <div class="input-group mb-3">
                        <input type="file" class="form-control" id="image" name="image" ref={profileImgRef} required/>
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formValues">
                    <Form.Label>Values</Form.Label>
                    <Form.Control type="text" ref={valuesRef} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formExperience">
                    <Form.Label>Experience</Form.Label>
                    <div class="mb-3">
                        <textarea name="campground[description]" cols="30" rows="10" class="form-control" type="text" id="description" ref={experienceRef} required></textarea>
                    </div> 
                </Form.Group>
                <Button variant="primary" type="submit">Save Changes</Button>
            </Form>
            <Link className={classes['profile-link']} to='/profile'>Back to Profile</Link>
        </Card>
    )
}

export default Edit;
