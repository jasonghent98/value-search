import React, {useState, useEffect} from 'react'
import classes from '../CssComponents/ProfileCard.module.css'
import { Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap'
import {profileImg} from '../Assets/Placeholder'
import Image from 'react-bootstrap/Image'

// import storage API to store photos
import { storage } from '../API/Firebase'
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from '@firebase/storage'
import axios from 'axios'

const ProfileCard = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [progress, setProgress] = useState(0);

    const photoClickHandler = event => {
        setFile({file: event.target.files[0]}, () => event.target.files[0])
        setError(null);
        console.log(file);
    }

    const photoUploadHandler = async () => {
        if (!file) return;
        // create a ref to the storage location
        const storageRef = ref(storage, `/files/${file.name}`)
        const uploadData = await uploadBytes(storageRef, file);
        console.log(uploadData)


        // uploadTask.on('state_changed', (snapshot) => {
        //     const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        //     console.log(prog);
        //     setProgress(prog);
        // }, error => console.log(error), 
        //     () => getDownloadURL(uploadTask.snapshot.ref)
        //     .then(url => console.log(url))) 
        
    }

    const onSubmitPhoto = event => {
        photoUploadHandler(file);
    }



    return (
        <div className={classes['card']}>
            <div className="profile-pic-div">
                <img src={profileImg} alt="" className={classes['image-profile']} id='photo' />
                <input type="file" alt='image' className={classes['file']} id='file' onChange={photoClickHandler}/>
                <label htmlFor="file" className={classes['upload-btn']} >Choose Photo</label>
                {/* <button onClick={onSubmitPhoto}>Upload Image</button> */}
             </div>

            <h1 className={classes['profile-name']}>Jason Ghent</h1>
            <h3 className={classes['job-title']}><i>IT Technician</i></h3>
            <ul className={classes['values-container']} contentEditable='true'> <h3>Jason's Core Values</h3>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <label htmlFor="experience"></label>
            <ul className={classes['experience']} contentEditable='true'> <h3>Relevant Experience</h3>
                <li></li>
                <li></li>
                <li></li>
            </ul>

        </div>
    )
}

export default ProfileCard; 
