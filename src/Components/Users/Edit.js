import Card from "../../Layout/Card";
import { Form, Button } from "react-bootstrap";
import classes from '../../CssComponents/Edit.module.css'


export const Edit = () => {
    return (
        <Card>
            <Form className={classes['form']}>
                <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formProfileImages">
                    <Form.Label>Profile Image</Form.Label>
                    <div class="input-group mb-3">
                        <input type="file" class="form-control" id="image" name="image" required/>
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formValues">
                    <Form.Label>Values</Form.Label>
                    <Form.Control type="text" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formExperience">
                    <Form.Label>Experience</Form.Label>
                    <div class="mb-3">
                        <textarea name="campground[description]" cols="30" rows="10" class="form-control" type="text" id="description" required></textarea>
                    </div> 
                </Form.Group>

                <Button variant="primary" type="submit">
                                    Save Changes
                </Button>
            </Form>
        </Card>
    )
}

export default Edit;
