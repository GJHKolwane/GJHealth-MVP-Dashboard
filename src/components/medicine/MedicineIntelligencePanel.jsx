import { useState, useEffect } from "react";

export default function MedicineIntelligencePanel({
  medication,
  facilityId
}) {

  const [stock, setStock] = useState(null);
  const [pressure, setPressure] = useState(null);
  const [alternatives, setAlternatives] = useState([]);
  const [regional, setRegional] = useState([]);
  const [actionMessage, setActionMessage] = useState("");

  const BASE_URL = "http://localhost:8086/internal";
  const FLOW_URL = "http://localhost:8082/decide";

  useEffect(() => {

    if (!medication || !facilityId) return;

    async function loadMedicineData() {

      try {

        // Facility stock
        const stockRes = await fetch(
          `${BASE_URL}/stock?medication=${medication}&facilityId=${facilityId}`
        );

        const stockData = await stockRes.json();
        setStock(stockData);

        // Pressure index
        const pressureRes = await fetch(
          `${BASE_URL}/pressure?medication=${medication}`
        );

        const pressureData = await pressureRes.json();
        setPressure(pressureData);

        // Therapeutic alternatives
        const altRes = await fetch(
          `${BASE_URL}/alternatives?medication=${medication}`
        );

        const altData = await altRes.json();
        setAlternatives(altData);

        // Regional availability
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

  /**
   * =====================================
   * PATIENT FLOW ACTION
   * =====================================
   */

  const executeFlowDecision = async (targetFacilityId, mode) => {

    try {

      const res = await fetch(FLOW_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({

          patientId: "PATIENT-MVP",
          consultationId: "CONSULT-MVP",
          prescriptionId: "RX-MVP",

          isNcdPatient: false,

          collectionMode: mode, // TRANSFER or COLLECT

          targetFacilityId

        })
      });

      const result = await res.json();

      if (result.status === "ORDER_PLACED") {

        setActionMessage(
          `Order placed for facility ${targetFacilityId}`
        );

      } else {

        setActionMessage("Flow decision failed");

      }

    } catch (err) {

      console.error("Flow execution failed", err);
      setActionMessage("Patient flow service unavailable");

    }

  };

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

      {/* STOCK */}

      {stock && (

        <div>

          <h4>Facility Stock</h4>

          <p><b>Medication:</b> {stock.medication}</p>

          <p><b>Remaining Stock:</b> {stock.remainingStock}</p>

          <p><b>Reorder Level:</b> {stock.reorderLevel}</p>

        </div>

      )}

      {/* PRESSURE */}

      {pressure && (

        <div style={{ marginTop: "10px" }}>

          <h4>Pressure Index</h4>

          <p>{pressure?.pressurePercent?.toFixed(1) ?? "N/A"}%</p>

          <p>Status: {pressure?.status ?? "Unknown"}</p>

        </div>

      )}

      {/* ALTERNATIVES */}

      {alternatives.length > 0 && (

        <div style={{ marginTop: "10px" }}>

          <h4>Therapeutic Alternatives</h4>

          <ul>

            {alternatives.map((alt, i) => (
              <li key={i}>{alt.genericName}</li>
            ))}

          </ul>

        </div>

      )}

      {/* REGIONAL SUPPLY */}

      {regional.length > 0 && (

        <div style={{ marginTop: "10px" }}>

          <h4>Regional Availability</h4>

          <table>

            <thead>

              <tr>
                <th>Facility</th>
                <th>Region</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              {regional.map((facility, i) => (

                <tr key={i}>

                  <td>{facility.facilityName}</td>

                  <td>{facility.region}</td>

                  <td>{facility.availableUnits}</td>

                  <td>

                    <button
                      onClick={() =>
                        executeFlowDecision(
                          facility.facilityId,
                          "TRANSFER"
                        )
                      }
                      style={{
                        marginRight: "6px",
                        padding: "4px 8px"
                      }}
                    >
                      Request Transfer
                    </button>

                    <button
                      onClick={() =>
                        executeFlowDecision(
                          facility.facilityId,
                          "COLLECT"
                        )
                      }
                      style={{
                        padding: "4px 8px"
                      }}
                    >
                      Patient Collect
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

      {actionMessage && (

        <p style={{ marginTop: "10px", color: "green" }}>
          {actionMessage}
        </p>

      )}

    </div>

  );

        }
