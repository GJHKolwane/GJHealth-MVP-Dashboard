import { useState } from "react";

export default function FollowUpScheduler({ patientId, consultationId }) {

  const [date, setDate] = useState("");
    const [time, setTime] = useState("");
      const [type, setType] = useState("FOLLOW_UP");
        const [notes, setNotes] = useState("");

          async function scheduleAppointment() {

              try {

                    const res = await fetch("http://localhost:8083/appointments/schedule", {

                            method: "POST",

                                    headers: {
                                              "Content-Type": "application/json"
                                                      },

                                                              body: JSON.stringify({

                                                                        patientId,
                                                                                  consultationId,
                                                                                            appointmentType: type,
                                                                                                      date,
                                                                                                                time,
                                                                                                                          notes

                                                                                                                                  })

                                                                                                                                        });

                                                                                                                                              const data = await res.json();

                                                                                                                                                    alert("Appointment Scheduled");

                                                                                                                                                          console.log(data);

                                                                                                                                                              } catch (err) {

                                                                                                                                                                    console.error("Scheduling failed", err);

                                                                                                                                                                        }

                                                                                                                                                                          }

                                                                                                                                                                            return (

                                                                                                                                                                                <div style={{
                                                                                                                                                                                      border: "1px solid #ccc",
                                                                                                                                                                                            padding: "16px",
                                                                                                                                                                                                  borderRadius: "8px",
                                                                                                                                                                                                        marginTop: "16px"
                                                                                                                                                                                                            }}>

                                                                                                                                                                                                                  <h3>Follow-Up Scheduling</h3>

                                                                                                                                                                                                                        <div style={{ marginBottom: "10px" }}>

                                                                                                                                                                                                                                <label>Appointment Type</label>

                                                                                                                                                                                                                                        <select
                                                                                                                                                                                                                                                  value={type}
                                                                                                                                                                                                                                                            onChange={(e) => setType(e.target.value)}
                                                                                                                                                                                                                                                                    >

                                                                                                                                                                                                                                                                              <option value="FOLLOW_UP">Follow-Up</option>
                                                                                                                                                                                                                                                                                        <option value="REVIEW">Review</option>
                                                                                                                                                                                                                                                                                                  <option value="SPECIALIST">Specialist Referral</option>

                                                                                                                                                                                                                                                                                                          </select>

                                                                                                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                                                                                                      <div style={{ marginBottom: "10px" }}>

                                                                                                                                                                                                                                                                                                                              <label>Date</label>

                                                                                                                                                                                                                                                                                                                                      <input
                                                                                                                                                                                                                                                                                                                                                type="date"
                                                                                                                                                                                                                                                                                                                                                          value={date}
                                                                                                                                                                                                                                                                                                                                                                    onChange={(e) => setDate(e.target.value)}
                                                                                                                                                                                                                                                                                                                                                                            />

                                                                                                                                                                                                                                                                                                                                                                                  </div>

                                                                                                                                                                                                                                                                                                                                                                                        <div style={{ marginBottom: "10px" }}>

                                                                                                                                                                                                                                                                                                                                                                                                <label>Time</label>

                                                                                                                                                                                                                                                                                                                                                                                                        <input
                                                                                                                                                                                                                                                                                                                                                                                                                  type="time"
                                                                                                                                                                                                                                                                                                                                                                                                                            value={time}
                                                                                                                                                                                                                                                                                                                                                                                                                                      onChange={(e) => setTime(e.target.value)}
                                                                                                                                                                                                                                                                                                                                                                                                                                              />

                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                          <div style={{ marginBottom: "10px" }}>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <label>Notes</label>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                          <textarea
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    placeholder="Clinical notes for follow-up"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              value={notes}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        onChange={(e) => setNotes(e.target.value)}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                />

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <button onClick={scheduleAppointment}>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Schedule Appointment
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </button>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                );

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }