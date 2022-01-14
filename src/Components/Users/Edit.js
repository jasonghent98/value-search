import Card from "../../Layout/Card";
import { Form, Button } from "react-bootstrap";
import { Fragment, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import classes from '../../CssComponents/Edit.module.css'
import Header from "../../Layout/Header";
import {useAuth} from '../../Contexts/AuthContext'

// firestore access
import { addDoc, setDoc, doc, collection, getDoc } from "@firebase/firestore";
import {addData, userRef, db} from '../../API/Firebase'
import { enableIndexedDbPersistence } from "firebase/firestore"; 



const Edit = () => {
    // initialize refs to listen for inputs 
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const profileImgRef = useRef();
    const valuesRef = useRef();
    const experienceRef = useRef();

    const history = useHistory();
    const {currentUser} = useAuth();


//     enableIndexedDbPersistence(db)
//   .catch((err) => {
//       if (err.code == 'failed-precondition') {
//           // Multiple tabs open, persistence can only be enabled
//           // in one tab at a a time.
//           // ...
//       } else if (err.code == 'unimplemented') {
//           // The current browser does not support all of the
//           // features required to enable persistence
//           // ...
//       }
//   });
// // Subsequent queries will use persistence, if it was enabled successfully


    // create an onSubmitHandler that will handle form data
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const editData = {
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
                profileImg: profileImgRef.current.value,
                values: valuesRef.current.value,
                experience: experienceRef.current.value
            }

            const result = await addDoc(userRef, editData)
            console.log(result, 'test');

        } catch (error) {
            console.log(error)
        }
        history.push('/profile')
    }


    return (
        <Fragment>
            <Header/>
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
        </Fragment>
    )
}

export default Edit;
