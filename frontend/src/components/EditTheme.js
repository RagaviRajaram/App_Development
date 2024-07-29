import React from 'react';
import '../Assets/css/EditTheme.css';

const EditTheme = () => {
  // Fetch themes logic here

  return (
    <div className="edit-theme">
      <h1>Edit Themes</h1>
      <div className="themes-container">
        <div className="theme-card">
          <h2>Theme Title</h2>
          <p>Theme Subtitle</p>
          <p>Theme Description</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        <div className="theme-card">
          <h2>Theme Title</h2>
          <p>Theme Subtitle</p>
          <p>Theme Description</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        <div className="theme-card">
          <h2>Theme Title</h2>
          <p>Theme Subtitle</p>
          <p>Theme Description</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        {/* Repeat theme-card for each theme */}
      </div>
    </div>
  );
};

export default EditTheme;
