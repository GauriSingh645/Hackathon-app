import React from 'react';

const HackathonCard = ({ hackathon }) => {
  return (
    <div className="hackathon-card" style={styles.card}>
      <img src={hackathon.image} alt={hackathon.name} style={styles.image} />
      <h2>{hackathon.name}</h2>
      <p>{hackathon.description}</p>
      <p><strong>Level:</strong> {hackathon.level}</p>
      <p><strong>Start Date:</strong> {hackathon.startDate}</p>
      <p><strong>End Date:</strong> {hackathon.endDate}</p>
    </div>
  );
};

// CSS styles inline me likhe gaye hain, baad me external CSS bhi use kar sakte hain
const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '16px',
    margin: '16px',
    borderRadius: '8px',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
};

export default HackathonCard;
