import React, { useState } from 'react';
import '../Assets/css/CreateTheme.css';

const CreateTheme = () => {
  const [theme, setTheme] = useState({
    image: '',
    title: '',
    subtitle: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTheme((prevTheme) => ({
      ...prevTheme,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle theme creation logic here
    alert('Theme created successfully!');
  };

  return (
    <div className="create-theme">
      <h1>Create Theme</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Image</label>
          <input type="text" name="image" value={theme.image} onChange={handleChange} />
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
