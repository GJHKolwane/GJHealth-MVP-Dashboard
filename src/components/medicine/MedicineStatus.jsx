export default function MedicineStatus({ medicine }) {

      if (!medicine) return null;

        return (

            <div className="card">

                  <h3>Medicine Availability</h3>

                        <p><strong>{medicine.name}</strong></p>

                              <p>Remaining Stock: {medicine.remainingStock}</p>
                                    <p>Reorder Level: {medicine.reorderLevel}</p>

                                        </div>

                                          );

                                          }
