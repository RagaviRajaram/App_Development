import React, { useState } from 'react';
import '../Assets/css/CreateTheme.css';

const CreateTheme = () => {
  const [theme, setTheme] = useState({
    image: null,
    title: '',
    subtitle: '',
    description: ''
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTheme((prevTheme) => ({
      ...prevTheme,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setTheme((prevTheme) => ({
      ...prevTheme,
      image: file
    }));
    
    // Create a preview URL for the image
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log the form data and file details (simulate form submission)
    console.log('Theme Data:', {
      image: theme.image,
      title: theme.title,
      subtitle: theme.subtitle,
      description: theme.description
    });

    // You can handle the file and form data here, e.g., simulate a file upload
    alert('Theme creation simulated. Check console for data.');
  };

  return (
    <div className="create-theme">
      <h1>Create Theme</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Image</label>
          <input type="file" name="image" onChange={handleFileChange} />
          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Image Preview" />
            </div>
          )}
        </div>
        <div className="form-group">
          <label>Title</label>
          <input type="text" name="title" value={theme.title} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Subtitle</label>
          <input type="text" name="subtitle" value={theme.subtitle} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea name="description" value={theme.description} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateTheme;
