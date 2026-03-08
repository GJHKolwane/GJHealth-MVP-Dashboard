export async function translateText(text, targetLanguage = "en") {

  try {

    const response = await fetch("http://localhost:8080/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text,
        targetLanguage
      })
    });

    const data = await response.json();

    return data.translatedText;

  } catch (error) {

    console.error("Translation failed:", error);

    return text;

  }

}
