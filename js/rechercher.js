document.getElementById("search-button").addEventListener("click", function () {
    const query = document.getElementById("search-query").value.trim();
    if (query) {
      console.log("Recherche pour :", query);
  
      // Filtre une liste de cartes ou éléments
      const results = document.querySelectorAll(".card");
      results.forEach((result) => {
        const title = result.querySelector(".card-title").textContent.toLowerCase(); // Adaptez à la structure de vos éléments
        if (title.includes(query.toLowerCase())) {
          result.style.display = "block"; // Afficher l'élément correspondant
        } else {
          result.style.display = "none"; // Masquer les éléments non correspondants
        }
      });
    } else {
      alert("Veuillez entrer un terme de recherche.");
    }
  });
  