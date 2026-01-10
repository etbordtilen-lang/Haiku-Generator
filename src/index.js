function generateHaiku(event) {
  event.preventDefault();

  new Typewriter("#haiku-output", {
    strings: `Frostbit finger tips <br />
    Fairy light canoes sailing by <br />
    Lukewarm frankfurter`,
    autoStart: true,
    delay: 80,
    cursor: "",
  });

  //alert("Haiku generation is not yet implemented.");
}

let haikuFormElement = document.querySelector("#haiku-generator-form");
haikuFormElement.addEventListener("submit", generateHaiku);
