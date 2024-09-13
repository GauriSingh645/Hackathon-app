// App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  // Initial state for hackathons
  const [hackathons, setHackathons] = useState([
    { id: 1, name: 'Hackathon 1', startDate: '2024-09-01', endDate: '2024-09-10', description: 'First hackathon', image: '', level: 'easy' },
    { id: 2, name: 'Hackathon 2', startDate: '2024-09-15', endDate: '2024-09-20', description: 'Second hackathon', image: '', level: 'hard' },
  ]);

  // Form state to add/edit hackathons
  const [formData, setFormData] = useState({
    name: "",
    startDate: "",
    endDate: "",
    description: "",
    image: "",
    level: "",
  });

  const [editing, setEditing] = useState(false);
  const [currentHackathonId, setCurrentHackathonId] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      setHackathons(
        hackathons.map((hackathon) =>
          hackathon.id === currentHackathonId ? { ...hackathon, ...formData } : hackathon
        )
      );
      setEditing(false);
      setCurrentHackathonId(null);
    } else {
      setHackathons([
        ...hackathons,
        { id: hackathons.length + 1, ...formData },
      ]);
    }
    // Clear form after submission
    setFormData({
      name: "",
      startDate: "",
      endDate: "",
      description: "",
      image: "",
      level: "",
    });
  };

  // Edit hackathon
  const editHackathon = (id) => {
    const hackathonToEdit = hackathons.find((hackathon) => hackathon.id === id);
    setFormData({
      name: hackathonToEdit.name,
      startDate: hackathonToEdit.startDate,
      endDate: hackathonToEdit.endDate,
      description: hackathonToEdit.description,
      image: hackathonToEdit.image,
      level: hackathonToEdit.level,
    });
    setEditing(true);
    setCurrentHackathonId(id);
  };

  // Delete hackathon
  const deleteHackathon = (id) => {
    setHackathons(hackathons.filter((hackathon) => hackathon.id !== id));
  };

  return (
    <div className="App">
      <h1>Hackathons</h1>

      {/* Form for adding/editing hackathons */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Hackathon Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Hackathon Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Hackathon Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <select
          name="level"
          value={formData.level}
          onChange={handleChange}
          required
        >
          <option value="">Select Level</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <button type="submit">{editing ? "Update Hackathon" : "Create Hackathon"}</button>
      </form>

      {/* List of hackathons */}
      <div className="hackathon-list">
        {hackathons.map((hackathon) => (
          <div key={hackathon.id} className="hackathon-card">
            <h2>{hackathon.name}</h2>
            <p>{hackathon.description}</p>
            <p>Start Date: {hackathon.startDate}</p>
            <p>End Date: {hackathon.endDate}</p>
            <p>Level: {hackathon.level}</p>
            <button onClick={() => editHackathon(hackathon.id)}>Edit</button>
            <button onClick={() => deleteHackathon(hackathon.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
