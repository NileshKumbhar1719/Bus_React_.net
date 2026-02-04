import React, { useEffect, useState } from "react";
import { getBuses } from "../Services/busService";
import "./Home.css";

export default function Home() {
  const [buses, setBuses] = useState([]); // always array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBuses()
      .then((res) => {
        const busList = Array.isArray(res.data)
          ? res.data
          : res.data?.data || []; // 👈 handles wrapped responses

        setBuses(busList);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setBuses([]);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Loading buses...</p>;

  return (
    <div className="home-container">
      <h2>Bus List</h2>

      {buses.length === 0 ? (
        <p className="no-data">No buses found</p>
      ) : (
        <table className="bus-table">
          <thead>
            <tr>
              <th>Bus ID</th>
              <th>Plate Number</th>
              <th>Capacity</th>
              <th>Image</th>
              <th>Round ID</th>
              <th>Round</th>
            </tr>
          </thead>
          <tbody>
            {buses.map((bus) => (
              <tr key={bus.busId}>
                <td>{bus.busId}</td>
                <td>{bus.plateNumber}</td>
                <td>{bus.capacity}</td>
                <td>
                  {bus.imageUrl ? (
                    <img src={bus.imageUrl} alt="bus" className="bus-image" />
                  ) : (
                    <span className="bus-image-placeholder">No image</span>
                  )}
                </td>
                <td>{bus.roundId}</td>
                <td>{bus.round?.name || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
