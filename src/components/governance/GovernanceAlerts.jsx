export default function GovernanceAlerts({ alert }) {

      if (!alert) return null;

        return (

            <div className="alert">

                  <h3>System Alert</h3>

                        <p>{alert.message}</p>

                            </div>

                              );

                              }
