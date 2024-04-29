import React, { useState } from 'react';
import { addDoc, updateDoc, collection, doc } from 'firebase/firestore';
import { db } from '../../firebase'; 
import styles from './imageForm.module.css'; // Import CSS module

const ImageForm = ({ loading, onAdd, onUpdate, updateIntent }) => {
  const [imageTitle, setImageTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageTitle.trim() || !imageUrl.trim()) return;

    try {
      if (updateIntent) {
        await handleUpdate({ title: imageTitle, url: imageUrl });
      } else {
        await handleAdd({ title: imageTitle, url: imageUrl });
      }
      setImageTitle('');
      setImageUrl('');
    } catch (error) {
      console.error('Error adding/updating image: ', error);
    }
  };

  const handleAdd = async ({ title, url }) => {
    if (onAdd) {
      onAdd(title, url);
    }
  };

  const handleUpdate = async ({ title, url }) => {
    if (onUpdate && updateIntent && updateIntent.id) {
      onUpdate({ id: updateIntent.id, title, url });
    }
  };

  return (
    <form className={styles.imageForm} onSubmit={handleSubmit}>
      <h2>{updateIntent ? 'Update Image' : 'Add New Image'}</h2>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter image title"
        value={imageTitle}
        onChange={(e) => setImageTitle(e.target.value)}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="Enter image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button className={styles.button} type="submit" disabled={loading}>
        {updateIntent ? 'Update' : 'Submit'}
      </button>
    </form>
  );
};

export default ImageForm;



