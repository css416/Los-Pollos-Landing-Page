import { useState, useEffect } from "react";
import { ref as DatabaseRef, push, set, onValue } from "firebase/database";
import { uploadBytes, ref as StorageRef, getDownloadURL } from "firebase/storage";
import { database, storage } from "./firebase";
import { v4 as uuidv4 } from 'uuid';

const AddReview = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [imageUpload, setimageUpload] = useState(null)
    const [body, setbody] = useState("")
    const [isRadio, setIsRadio] = useState(0);

    const createReview = () => {
        const imageName =  uuidv4() + imageUpload.name;

        const imageRef = StorageRef(storage, `reviews/${imageName}`);
        uploadBytes(imageRef, imageUpload).then(snapshot => {
            getDownloadURL(snapshot.ref).then( url => {
                set(DatabaseRef(database, `reviews/${uuidv4()}`), {
                    firstName: firstName,
                    lastName: lastName,
                    profile: url,
                    body : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum quidem ipsam ab ex a libero.',
                    stars: isRadio
                });
                console.log('goods!')
            })
        })

        

        // set(DatabaseRef(database, `reviews/${uuidv4()}`), {
        //     firstName: firstName,
        //     lastName: lastName,
        //     profile: imageName,
        //     body : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum quidem ipsam ab ex a libero.',
        //     stars: isRadio
        // });

    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '50%'}}>
            add review
            {/* <input value={name} onChange={(e) => {setName(e.target.value)}} /> */}
            <input placeholder="first_name" onChange={e => {setFirstName(e.target.value)}} required/>
            <input placeholder="last_name" onChange={e => {setLastName(e.target.value)}} required />
            <input type="file" onChange={e => {setimageUpload(e.target.files[0])}} />

            <textarea placeholder="body" onChange={e => {setbody(e.target.value)}} />

            <h1>Rating</h1>
            <ul style={{display: 'flex'}}> 
            <li style={{listStyle: 'none'}}>
                <input
                    type='checkbox'
                    id='radio1'
                    value='1'
                    onChange={e => {setIsRadio(e.target.value)}}
                />
                <label htmlFor='num1'>1</label>
            </li>
            <li style={{listStyle: 'none'}}>
                <input
                    type='radio'
                    id='radio1'
                    value='2'
                    onChange={e => {setIsRadio(e.target.value)}}
                />
                <label htmlFor='num2'>2</label>
            </li>
            <li style={{listStyle: 'none'}}>
                <input
                    type='radio'
                    id='radio1'
                    value='3'
                    onChange={e => {setIsRadio(e.target.value)}}
                />
                <label htmlFor='num3'>3</label>
            </li>
            <li style={{listStyle: 'none'}}>
                <input
                    type='radio'
                    id='radio1'
                    value='4'
                    onChange={e => {setIsRadio(e.target.value)}}
                />
                <label htmlFor='num4'>4</label>
            </li>
            <li style={{listStyle: 'none'}}>
                <input
                    type='radio'
                    id='radio1'
                    value='5'
                    onChange={e => {setIsRadio(e.target.value)}}
                />
                <label htmlFor='num5'>5</label>
            </li>
      </ul>


            <button onClick={createReview}>Add</button>

        </div>
    );
}
 
export default AddReview;