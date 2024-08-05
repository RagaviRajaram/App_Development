import React, { useState } from 'react';
import '../Assets/css/EditTheme.css';

// Import images
import image1 from '../Assets/Images/a2.jpg';
import image2 from '../Assets/Images/a3.jpg';
import image3 from '../Assets/Images/a4.jpg';

const initialThemes = [
  {
    id: 1,
    title: 'Birthday Bash',
    subtitle: 'Fun and Joy',
    description: 'A vibrant theme for birthday celebrations.',
    image: image1,
  },
  {
    id: 2,
    title: 'Wedding Bliss',
    subtitle: 'Elegant and Classy',
    description: 'An elegant theme for weddings.',
    image: image2,
  },
  {
    id: 3,
    title: 'Corporate Gala',
    subtitle: 'Professional and Polished',
    description: 'A sophisticated theme for corporate events.',
    image: image3,
  },
];

const EditTheme = () => {
  const [themes, setThemes] = useState(initialThemes);

  const handleEdit = (id) => {
    // Implement your edit logic here
    alert(`Edit theme with id ${id}`);
  };

  const handleDelete = (id) => {
    // Implement your delete logic here
    const updatedThemes = themes.filter(theme => theme.id !== id);
    setThemes(updatedThemes);
    alert(`Deleted theme with id ${id}`);
  };

  return (
    <div className="edit-theme">
      <h1>Edit Themes</h1>
      <div className="themes-container">
        {themes.map(theme => (
          <div key={theme.id} className="theme-card">
            <img src={theme.image} alt={theme.title} className="theme-image" />
            <h2>{theme.title}</h2>
            <p>{theme.subtitle}</p>
            <p>{theme.description}</p>
            <button onClick={() => handleEdit(theme.id)}>Edit</button>
            <button onClick={() => handleDelete(theme.id)} className="delete">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditTheme;
