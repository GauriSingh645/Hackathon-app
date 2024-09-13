import React, { useState } from 'react';

const HackathonForm = ({ addHackathon }) => {
  const [hackathon, setHackathon] = useState({
    name: '',
    description: '',
    level: 'easy',
    startDate: '',
    endDate: '',
    image: ''
  });

  const handleChange = (e) => {
    setHackathon({
      ...hackathon,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addHackathon(hackathon);
    setHackathon({
      name: '',
      description: '',
      level: 'easy',
      startDate: '',
      endDate: '',
      image: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label>Name</label>
      <input type="text" name="name" value={hackathon.name} onChange={handleChange} required />
      
      <label>Description</label>
      <textarea name="description" value={hackathon.description} onChange={handleChange} required />

      <label>Level</label>
      <select name="level" value={hackathon.level} onChange={handleChange}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <label>Start Date</label>
      <input type="date" name="startDate" value={hackathon.startDate} onChange={handleChange} required />

      <label>End Date</label>
      <input type="date" name="endDate" value={hackathon.endDate} onChange={handleChange} required />

      <label>Image URL</label>
      <input type="text" name="image" value={hackathon.image} onChange={handleChange} required />

      <button type="submit">Create Hackathon</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '16px',
    margin: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
};

export default HackathonForm;
