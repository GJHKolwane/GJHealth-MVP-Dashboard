import React, { useState } from "react";
import { scheduleFollowUp } from "../../services/clinicalApi";

export default function ScheduleAppointmentStep({ nextStep, prevStep }) {

  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);

  const encounterId = localStorage.getItem("currentEncounter");

  async function handleSchedule() {

    try {

      setLoading(true);

      const result = await scheduleFollowUp(encounterId, {
        date,
        reason
      });

      console.log("Follow-up scheduled:", result);

      localStorage.setItem(
        "followUpAppointment",
        JSON.stringify(result)
      );

      nextStep();

    } catch (err) {

      console.error("Scheduling failed", err);
      alert("Failed to schedule appointment");

    } finally {

      setLoading(false);

    }

  }

  return (

    <div>

      <h3>Schedule Follow-Up Appointment</h3>

      <p>
        Schedule a follow-up consultation for the patient.
      </p>

      <h4>Appointment Date</h4>

      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <h4>Reason</h4>

      <textarea
        rows="3"
        style={{ width: "100%" }}
        placeholder="Follow-up reason"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />

      <div style={{ marginTop: "20px" }}>

        <button onClick={prevStep}>
          Back
        </button>

        <button
          onClick={handleSchedule}
          disabled={loading}
          style={{ marginLeft: "10px" }}
        >
          {loading ? "Scheduling..." : "Schedule Appointment"}
        </button>

      </div>

    </div>

  );

}
