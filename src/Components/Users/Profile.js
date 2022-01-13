import Card from '../../Layout/Card';
import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import classes from '../../CssComponents/Profile.module.css'
import { Button } from 'react-bootstrap'
import {profileImg} from '../../Assets/Placeholder'
import Header from '../../Layout/Header';

// import storage API to store photos (still not working)
import { storage } from '../../API/Firebase'
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from '@firebase/storage'
import axios from 'axios'

const Profile = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [progress, setProgress] = useState(0);

    const history = useHistory();

    const photoClickHandler = event => {
        setFile({file: event.target.files[0]}, () => event.target.files[0])
        setError(null);
        console.log(file);
    }


    // const photoUploadHandler = async () => {
    //     if (!file) return;
    //     // create a ref to the storage location
    //     const storageRef = ref(storage, `/files/${file.name}`)
    //     const uploadData = await uploadBytes(storageRef, file);
    //     console.log(uploadData)


    //     uploadTask.on('state_changed', (snapshot) => {
    //         const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    //         console.log(prog);
    //         setProgress(prog);
    //     }, error => console.log(error), 
    //         () => getDownloadURL(uploadTask.snapshot.ref)
    //         .then(url => console.log(url))) 
        
    // }

    // const onSubmitPhoto = event => {
    //     photoUploadHandler(file);
    // }

    const toEditPage = () => {
        history.push('/edit');
    }

    return (
        <div className="body">
            <Header/>
                <Card>
                    <div className="profile-pic-div">
                        <img src={profileImg} alt="" className={classes['image-profile']} id='photo' />
                        <input type="file" alt='image' className={classes['file']} id='file' onChange={photoClickHandler}/>
                        <label htmlFor="file" className={classes['upload-btn']} >Choose Photo</label>
                        {/* <button onClick={onSubmitPhoto}>Upload Image</button> */}
                    </div>

                    <h1 className={classes['profile-name']}>Jason Ghent</h1>
                    <h3 className={classes['job-title']}><i>IT Technician</i></h3>
                    <ul className={classes['values-container']} > <h3>Jason's Core Values</h3>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <label htmlFor="experience"></label>
                    <form action="/edit">
                        <ul className={classes['experience']}> <h3>Relevant Experience</h3>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <Button className={classes['update-profile-submit']} variant='primary' onClick={toEditPage}>Edit</Button>
                    </form>
                </Card>
        </div>
    )
}

export default Profile;
