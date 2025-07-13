function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let inputText = document.querySelector("#intext");
  let prompt = `Generate a poem about ${inputText.value}`;
  let context =
    "You are a poem expect and love to write short poems. Your mission is to write a 4 line poem and separate each line with a <br/> . Make sure to follow the user instructions and sign the poem with your ai signature";
  let apiKey = "oca241dc50fc43eft2aa6936faa5a0b1";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemEle = document.querySelector("#poem");
  poemEle.classList.remove("hidden");

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemForm = document.querySelector("#poem-gen");

poemForm.addEventListener("submit", generatePoem);
