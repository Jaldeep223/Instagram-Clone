
import React, { useState } from 'react';
import '../styles/Create.scss'; 


const Create = () => {
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // preview
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle form submission here (e.g., send to API)
    const postData = {
      image,
      location,
      description,
    };
    console.log('Post data:', postData);

    // Reset form
    setImage(null);
    setLocation('');
    setDescription('');
    setShowForm(false);
  };

  return (
    <div className="wrapper">
      <button className="createBtn" onClick={() => setShowForm(true)}>+ Create Post</button>

      {showForm && (
        <form className="form" onSubmit={handleSubmit}>
          <label className="imageLabel">
            {image ? (
              <img src={image} alt="Preview" className="preview" />
            ) : (
              <span>📁 Select Image</span>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              hidden
            />
          </label>
          
          <input
            type="text"
            placeholder="📍 Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="input"
          />

          <textarea
            placeholder="📝 Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea"
          />

          <div className="actions">
            <button type="submit" className="shareBtn">Share</button>
            <button type="button" onClick={() => setShowForm(false)} className="cancelBtn">Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Create;

