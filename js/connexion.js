import { inscription } from './inscription';

const formConnexion = document.getElementById("form-connexion");

formConnexion.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const myEmail = document.getElementById("my-email").value;
    const myPassword = document.getElementById("my-password").value;
    const p = document.querySelector("p");
    
    const user = inscription.find(u => u.email === myEmail && u.password === myPassword);

    if (user) {
        if (user.email === "mmbaye11@gmail.com" && user.password === "123") {
            window.location.href = "./client/accueil.html";
        } else {
            window.location.href = "./receptionnistes/accueil.html";
        }
    } else {
        p.innerHTML = "Email ou mot de passe Invalide";
        p.style.color = "red";
    }
});