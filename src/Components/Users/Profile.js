import Card from '../../Layout/Card';
import React, {useState, useEffect, useRef} from 'react'
import { useHistory } from 'react-router-dom';
import classes from '../../CssComponents/Profile.module.css'
import { Button } from 'react-bootstrap'
import {profileImg} from '../../Assets/Placeholder'
import Header from '../../Layout/Header';
import { useAuth } from '../../Contexts/AuthContext';
import firebase from '@firebase/app-compat';

// import storage API to store photos (still not working)
import { storage, userRef, db } from '../../API/Firebase'
import { doc, getDoc, getDocs, onSnapshot, query, where, collection } from '@firebase/firestore';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from '@firebase/storage'
import axios from 'axios'

const Profile = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [progress, setProgress] = useState(0);
    const {currentUser} = useAuth();

    // ref values
    const [isLoading, setIsLoading] = useState(false);
    const [first, setFirst] = useState(null);
    const [last, setLast] = useState(null);
    const [description, setDescription] = useState(null);
    const [values, setValues] = useState(null);
    const [img, setImg] = useState(null);

    const history = useHistory();

    const photoClickHandler = event => {
        setFile({file: event.target.files[0]}, () => event.target.files[0])
        setError(null);
        console.log(file);
    }

    const toEditPage = () => {
        history.push('/edit');
    }

//  fetch profile data to display
    const fetchProfile = async () => {
        setIsLoading(true);
        const q = query(collection(db, "userData"), where("uid", "==", currentUser.uid))
        const response = await getDocs(q).then(snapshot => {return snapshot.docs[0].data()});
        setIsLoading(false);
        console.log(response)  
        setFirst(response.firstName);
        setLast(response.lastName);
        setDescription(response.description);
        setValues(response.values);
        setImg(response.img);
    }

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal
        fetchProfile();
        return () => {
            controller.abort()
        }
    },[])


    return (
        <div className="body">
            <Header/>
                <Card>
                    <div className="profile-pic-div">
                        <img src={img} alt="" className={classes['image-profile']} id='photo' />
                        <input type="file" alt='image' className={classes['file']} id='file' onChange={photoClickHandler}/>
                        <label htmlFor="file" className={classes['upload-btn']} >Choose Photo</label>
                        {/* <button onClick={onSubmitPhoto}>Upload Image</button> */}
                    </div>

                    <h1 className={classes['profile-name']}>{`${first} ${last}`}</h1>
                    <h3 className={classes['job-title']}><i>IT Technician</i></h3>
                    <ul className={classes['values-container']} > <h3>{`${first}'s`} Core Values</h3>
                        <li>{values}</li>
                    </ul>
                    <label htmlFor="experience"></label>
                    <form action="/edit">
                        <ul className={classes['experience']}> <h3>Relevant Experience</h3>
                            <li>{description}</li>
                        </ul>
                        <Button className={classes['update-profile-submit']} variant='primary' onClick={toEditPage}>Edit</Button>
                    </form>
                </Card>
        </div>
    )
}

export default Profile;
