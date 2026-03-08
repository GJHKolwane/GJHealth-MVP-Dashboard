import { useState, useEffect } from "react";

export default function MedicineIntelligencePanel({ medication, facilityId }) {

  const [stock, setStock] = useState(null);
  const [pressure, setPressure] = useState(null);
  const [alternatives, setAlternatives] = useState([]);
  const [regional, setRegional] = useState([]);

  const BASE_URL = "http://localhost:8086/internal";

  useEffect(() => {

    if (!medication || !facilityId) return;

    async function loadMedicineData() {

      try {

        // Stock
        const stockRes = await fetch(
          `${BASE_URL}/stock?medication=${medication}&facilityId=${facilityId}`
        );

        const stockData = await stockRes.json();
        setStock(stockData);

        // Pressure
        const pressureRes = await fetch(
          `${BASE_URL}/pressure?medication=${medication}`
        );

        const pressureData = await pressureRes.json();
        setPressure(pressureData);

        // Alternatives
        const altRes = await fetch(
          `${BASE_URL}/alternatives?medication=${medication}`
        );

        const altData = await altRes.json();
        setAlternatives(altData);

        // Regional supply
        const regionalRes = await fetch(
          `${BASE_URL}/regional?medication=${medication}`
        );

        const regionalData = await regionalRes.json();
        setRegional(regionalData);

      } catch (err) {

        console.error("Medicine intelligence load failed", err);

      }

    }

    loadMedicineData();

  }, [medication, facilityId]);

  return (

    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        borderRadius: "8px",
        marginTop: "16px"
      }}
    >

      <h3>Medicine Intelligence</h3>

      {!medication && (
        <p>Select medication to view intelligence</p>
      )}

      {stock && (

        <div>

          <h4>Facility Stock</h4>

          <p>
            <b>Medication:</b> {stock.medication}
          </p>

          <p>
            <b>Remaining Stock:</b> {stock.remainingStock}
          </p>

          <p>
            <b>Reorder Level:</b> {stock.reorderLevel}
          </p>

        </div>

      )}

      {pressure && (

        <div style={{ marginTop: "10px" }}>

          <h4>Pressure Index</h4>

          <p>
            {pressure?.pressurePercent?.toFixed(1) ?? "N/A"}%
          </p>

          <p>
            Status: {pressure?.status ?? "Unknown"}
          </p>

        </div>

      )}

      {alternatives.length > 0 && (

        <div style={{ marginTop: "10px" }}>

          <h4>Therapeutic Alternatives</h4>

          <ul>

            {alternatives.map((alt, i) => (

              <li key={i}>
                {alt.genericName}
              </li>

            ))}

          </ul>

        </div>

      )}

      {regional.length > 0 && (

        <div style={{ marginTop: "10px" }}>

          <h4>Regional Availability</h4>

          <table>

            <thead>

              <tr>
                <th>Facility</th>
                <th>Region</th>
                <th>Stock</th>
              </tr>

            </thead>

            <tbody>

              {regional.map((facility, i) => (

                <tr key={i}>

                  <td>{facility.facilityName}</td>

                  <td>{facility.region}</td>

                  <td>{facility.availableUnits}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>

  );

          }
