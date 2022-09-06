/*
Maak het spelletje blad steen schaar.
De gebruiker klikt op de de afbeelding met het blad, met de steen of met de schaar.
Gebruik de afbeeldingen blad.png , steen.png en schaar.png.
Je programma kiest daarna at random een afbeelding met een blad, een steen of een schaar.
en toont die afbeelding onder “De keuze van de computer”.
Je programma bepaalt daarna de winnaar en toont die onder “Winnaar”. De winnaar is:
• Gelijkspel, als de gebruiker en je programma dezelfde afbeelding kozen.
• De gebruiker, als de gebruiker blad koos en je programma steen.
• De gebruiker, als de gebruiker steen koos en je programma schaar.
• De gebruiker, als de gebruiker schaar koos en je programma blad.
• Je programma, als je programma schaar koos en de gebruiker blad.
• Je programma, als je programma blad koos en de gebruiker steen.
• Je programma, als je programma steen koos en de gebruiker schaar.
8
JAVASCRIPT TAKEN
Je vindt de afbeeldingen bij het takenmateriaal.
Bezorg je oplossing aan je coach.
Tip:
De code Math.floor((Math.random() * 3) + 1) geeft je een geheel getal tussen 1 en 3.
Uitleg: Math.random() geeft je een getal tussen 0 (inbegrepen) en 1 (niet inbegrepen).
Math.floor geeft een getal terug. Dit is het getal in de parameter, maar zonder decimalen.
Math.floor(2.7) geeft bijvoorbeeld 2.
*/
window.onload = () => {
  const wapens = ["blad", "steen", "schaar"];
  const speler = {
    naam: "Mel Gibson",
  };
  const npc = {
    naam: "NPC",
  };
  function tekenSpelbord(body = document.body) {
    const section = document.createElement("section");
    section.className = "section_spelbord";
    const spelbord = document.createElement("article");
    spelbord.className = "spelbord";
    const spelbord_elementen = [
      "npc_wapen",
      "npc_naam",
      "battleground",
      "speler_naam",
      "speler_wapen",
    ];
    for (const element of spelbord_elementen) {
      const spelbord_element = document.createElement("div");
      spelbord_element.classList.add("bord_element");
      spelbord_element.classList.add(element);
      // Append wapen image-buttons  
      if (element === "npc_wapen" || element === "speler_wapen") {
        const ul = document.createElement("ul");
        ul.className = "wapen_list";
        if (element === "speler_wapen") {
          ul.classList.add("speler_wapen_list");
        }
        for (const wapen of wapens) {
          const li = document.createElement("li");
          li.className = "wapen_li";
          li.dataset.wapen = wapen;
          li.id = wapen;
          if (element === "speler_wapen") {
            li.classList.add(element);
          }
          const img = document.createElement("img");
          img.src = `../public/img/${wapen}.png`;
          img.className = "wapen_img";
          img.dataset.wapen = wapen;
          li.append(img);
          ul.append(li);
        }
        spelbord_element.classList.add("wapen");
        spelbord_element.append(ul);
      }
      // Append npc naam
      if( element==="npc_naam"){
        const h2=document.createElement("h2");
        h2.className=`${element}_text`;
        h2.textContent=npc.naam;
        spelbord_element.append(h2);
      }
      // Append battleground h1
      if(element==="battleground"){
        const h1=document.createElement("h2");
        h1.classList.add(`${element}_text`);
        spelbord_element.append(h1);
      }
      // Append speler naam
      if( element==="speler_naam"){
        const h2=document.createElement("h2");
        h2.className=`${element}_text`;
        h2.textContent=speler.naam;
        spelbord_element.append(h2);
      }
      spelbord.append(spelbord_element);
    }
    section.append(spelbord);
    body.append(section);

    return spelbord;
  }
  function toonResultaat(resultaat) {
    console.log(resultaat);
    document.querySelector(".battleground_text").innerHTML=resultaat;
  }
  tekenSpelbord();
  const wapen_elements = document.querySelectorAll(".wapen_li.speler_wapen");
  wapen_elements.forEach((element) => {
    element.addEventListener("click", (e) => {
      const keuze_speler = e.target.dataset.wapen;
      const keuze_npc = wapens[Math.round(Math.random() * 2)];
      let resultaat;
      if (keuze_speler === keuze_npc) {
        resultaat = `Gelijkspel: (${keuze_speler}) vs (${keuze_npc})`;
      } else if (
        (keuze_speler === "blad" && keuze_npc === "steen") ||
        (keuze_speler === "steen" && keuze_npc === "schaar") ||
        (keuze_speler === "schaar" && keuze_npc === "blad")
      ) {
        resultaat = `Gewonnen: (${keuze_speler}) vs (${keuze_npc})`;
      } else {
        resultaat =  `Verloren: (${keuze_speler}) vs (${keuze_npc})`;
      }
      toonResultaat(resultaat);
    });
  });
};
