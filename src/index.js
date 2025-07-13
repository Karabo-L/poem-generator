function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "POEM POEM POEM POEM POEM POEM",
    autoStart: true,
    cursor: "",
  });
}

let poemForm = document.querySelector("#poem-gen");

poemForm.addEventListener("submit", generatePoem);
