// Sélectionne le bouton hamburger
const hamburger = document.querySelector(".hamburger");

// Crée dynamiquement le menu
const menu = document.createElement("div");
menu.classList.add("menu");
menu.innerHTML = `
  <ul>
    <li><a href="index.html">Accueil</a></li>
    <li><a href="apropos.html">À propos</a></li>
    <li><a href="chambres.html">Chambres</a></li>
    <li><a href="reservation.html">Réservations</a></li>
    <li><a href="contact.html">Contact</a></li>
    <li><a href="connexion.html">Connexion</a></li>
    <li><a href="inscription.html">Inscription</a></li>
  </ul>
`;

// Ajoute le menu au document
document.body.appendChild(menu);

// Gère l'affichage du menu
hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
