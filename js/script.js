const tableau = [
    "navbar/etatcivil.html",
    "navbar/formations.html",
    "navbar/experiences.html",
    "navbar/centredinteret.html",
    "navbar/contacts.html",
    "navbar/album.html",
  ];
  
  $(document).ready(function () {
    // Ajouter l'événement click à tous les éléments <li>
    $("nav-link").click(function () {
      // Retirer la classe active de tous les autres éléments
      $("nav-link").removeClass("active");
  
      // Ajouter la classe active à l'élément cliqué
      $(this).addClass("active");
  
      // Obtenir l'index de l'élément cliqué
      const index = $(this).index();
  
    });
  });
  
  