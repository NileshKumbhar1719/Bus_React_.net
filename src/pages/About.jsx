import React, { useEffect, useState } from 'react'
import "./About.css"

export default function About() {

  const [PassengerName, setPassengerName] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch('https://localhost:7020/api/Passengers')
      .then(res => res.json())
      .then(json => {
        setPassengerName(json)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
        setLoading(false)
      });

  }, [])

  if (loading) return <p>Loading passengers...</p>;

  return (
    <div className="about-container">
      <h2>Passengers Information</h2>

      <p>
        Our bus management system helps you manage passengers efficiently.
        View all registered passengers below.
      </p>

      <h3>Registered Passengers</h3>

      {PassengerName.length === 0 ? (
        <p>No passengers found</p>
      ) : (
        <table className="bus-table">
          <thead>
            <tr>
              <th>Passenger ID</th>
              <th>Name</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {PassengerName.map((passenger) => (
              <tr key={passenger.passengerId}>
                <td>{passenger.passengerId}</td>
                <td>{passenger.name}</td>
                <td>{passenger.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
