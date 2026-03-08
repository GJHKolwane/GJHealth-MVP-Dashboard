export default function PatientInfoCard({ patient }) {

      return (
          <div className="card">

                <h3>Patient Information</h3>

                      <p><strong>ID:</strong> {patient.id}</p>
                            <p><strong>Age:</strong> {patient.age}</p>
                                  <p><strong>Sex:</strong> {patient.sex}</p>

                                        <p>
                                                <strong>Allergies:</strong>
                                                        {patient.allergies || "UNKNOWN"}
                                                              </p>

                                                                  </div>
                                                                    );

                                                                    }
