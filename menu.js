// opretter konstanter
const burger = document.querySelector(".burger"); // burger ikonet
const nav = document.querySelector("nav"); // navigationselement
const menu = document.querySelector(".menu"); // Menu-listen
const links = document.querySelectorAll(".menu li a"); //Alle links i menuen

// tilføj en event listener (click) til burger-ikonet for at aktivere burgermenuen. Lukker og åbner menuen
burger.addEventListener("click", () => { 
  burger.classList.toggle("active"); //tilføjer eller fjerner "active" klassen fra burger ikonet
  nav.classList.toggle("active"); //tilføjer eller fjerner "active" klassen fra navigationen (links)
});
//når brugeren klikker på bruger ikonet, åbnes eller lukkes menuen

//Tilføj eventlisteners til vert link i menuen. 
links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active"); //fjerner "active" klassen fra burger ikonet ved klik på et link
    nav.classList.remove("active"); //fjerner "sctive" klassen fra navigationen ved at klikke på et link
  });
});
