import React from "react";
import { useState } from "react";
import { storage } from "../firebase"
import { ref, uploadBytes } from 'firebase/storage';

const About: React.FC<{}> = () => {
    const [imageUpload, setImageUpload] = useState<File | null>(null);


    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `test/${imageUpload.name}`);
        uploadBytes(imageRef, imageUpload).then(() => {
            alert("image uploaded")
        })
    }
    return (
        <div>
            <h3>A Simple React Component Example with Typescript</h3>
            <div>
                <input type="file" onChange={(event) => {
                    if (event.target.files && event.target.files.length > 0) {
                        setImageUpload(event.target.files[0]);
                    }
                }} />
                <button onClick={uploadImage}>upload image</button>
            </div>
            <p>This component will upload image to firestore.</p>
        </div>
    );
};

export default About;