document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("chambreForm");
  
    form.addEventListener("submit", (event) => {
      let isValid = true;
  
      // Nom de la chambre
      const nom = document.getElementById("nom");
      if (!nom.value.trim()) {
        nom.classList.add("is-invalid");
        isValid = false;
      } else {
        nom.classList.remove("is-invalid");
      }
  
      // Catégorie
      const categorie = document.getElementById("categorie");
      if (!categorie.value.trim()) {
        categorie.classList.add("is-invalid");
        isValid = false;
      } else {
        categorie.classList.remove("is-invalid");
      }
  
      // Prix
      const prix = document.getElementById("prix");
      if (!prix.value.trim() || isNaN(prix.value) || parseFloat(prix.value) <= 0) {
        prix.classList.add("is-invalid");
        isValid = false;
      } else {
        prix.classList.remove("is-invalid");
      }
  
      // Disponibilité
      const disponibilite = document.getElementById("disponibilite");
      if (!disponibilite.value.trim()) {
        disponibilite.classList.add("is-invalid");
        isValid = false;
      } else {
        disponibilite.classList.remove("is-invalid");
      }
  
     // Capacité
    const capacite = document.getElementById("capacite");
    const capaciteValue = parseInt(capacite.value, 10);
    if (!capacite.value.trim() || isNaN(capaciteValue) || !Number.isInteger(capaciteValue) || capaciteValue < 1) {
    capacite.classList.add("is-invalid");
    isValid = false;
    } else {
    capacite.classList.remove("is-invalid");
    }
  
      // Images
    const images = document.getElementById("formFileMultiple");
    if (!images.files.length) {
      images.classList.add("is-invalid");
      isValid = false;
    } else {
      // Validation des types de fichiers
      const validTypes = ["image/png", "image/jpeg"];
      const invalidFiles = Array.from(images.files).filter(
        (file) => !validTypes.includes(file.type)
      );

      if (invalidFiles.length > 0) {
        images.classList.add("is-invalid");
        isValid = false;
      } else {
        images.classList.remove("is-invalid");
      }
    }
  
      // Description
      const description = document.getElementById("description");
      if (!description.value.trim()) {
        description.classList.add("is-invalid");
        isValid = false;
      } else {
        description.classList.remove("is-invalid");
      }
  
      // Empêche l'envoi du formulaire si une validation échoue
      if (!isValid) {
        event.preventDefault();
        event.stopPropagation();
      }
    });
  });
  