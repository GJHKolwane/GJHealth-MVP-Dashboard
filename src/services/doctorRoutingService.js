export async function routeDoctor(consultationId, soan) {

  try {

    const response = await fetch("http://localhost:8080/doctor/route", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        consultationId,
        soan
      })
    });

    const data = await response.json();

    return data;

  } catch (error) {

    console.error("Doctor routing failed:", error);

    return {
      status: "FAILED"
    };

  }

}
