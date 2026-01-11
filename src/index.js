function displayHaiku(response) {
  let haiku = response.data.answer;
  let formattedHaiku = haiku.replace(/\n/g, "<br />");
  new Typewriter("#haiku-output", {
    strings: formattedHaiku,
    autoStart: true,
    delay: 70,
    cursor: "",
  });
}

function generateHaiku(event) {
  event.preventDefault();

  let topicInputElement = document.querySelector("#user-topic-input");
  let apiKey = "fe3at4b9ob076b4e8c6aecc0604ae6d6";
  let prompt = `Generate a haiku about ${topicInputElement.value}`;
  let context =
    "Haiku poetry, nature, seasons, emotions. In Haiku format: 3 lines, 5-7-5 syllables. Remove punctuation.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let haikuOutputElement = document.querySelector("#haiku-output");
  haikuOutputElement.innerHTML = `Generating a Haiku about "${topicInputElement.value}"...`;

  //console.log("Generating haiku...");
  //console.log(`Prompt: ${prompt}`);
  //console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayHaiku);

  //alert("Haiku generation is not yet implemented.");
}

let haikuFormElement = document.querySelector("#haiku-generator-form");
haikuFormElement.addEventListener("submit", generateHaiku);

//  let haikuOutputElement = document.querySelector("#haiku-output");
//haikuOutputElement.innerHTML = response.data.generated_text;
