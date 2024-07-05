import React, { useState } from 'react';
import { storage } from '../../../firebase/firebase';
import { ref, uploadBytesResumable, UploadTask } from 'firebase/storage';

const UploadImage: React.FC = () => {
  const [imageUpload, setImageUpload] = useState<File | null>(null);
  const [imageName, setImageName] = useState<string>('');
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImageUpload(event.target.files[0]);
      setUploadError(null); // Reset error state
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageName(event.target.value);
  };

  const uploadImage = () => {
    if (!imageUpload) {
      setUploadError('Please select an image to upload.');
      return;
    }

    const fileName = imageName.trim() || imageUpload.name;
    const imageRef = ref(storage, `test/${fileName}`);
    const uploadTask: UploadTask = uploadBytesResumable(imageRef, imageUpload);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
        setUploading(true);
      },
      (error) => {
        setUploadError('Failed to upload image. Please try again.');
        console.error('Error uploading image:', error);
        setUploading(false);
      },
      () => {
        // Upload completed successfully
        setUploading(false);
        setUploadProgress(0);
        alert('Image uploaded successfully!');
      }
    );
  };

  return (
    <div>
      <h3>Upload Image Component</h3>
      <div>
        <input type="file" onChange={handleImageChange} />
        <br />
        <input
          type="text"
          placeholder="Enter Image Name (Optional)"
          value={imageName}
          onChange={handleNameChange}
          style={{ marginTop: '0.5rem' }}
        />
        <br />
        <button onClick={uploadImage} disabled={!imageUpload || uploading}>
          {uploading ? 'Uploading...' : 'Upload Image'}
        </button>
      </div>
      {uploadProgress > 0 && <progress value={uploadProgress} max={100} />}
      {uploadError && <div style={{ color: 'red', marginTop: '1rem' }}>{uploadError}</div>}
    </div>
  );
};

export default UploadImage;
