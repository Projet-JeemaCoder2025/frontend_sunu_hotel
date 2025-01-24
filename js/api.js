const loginUser = async (email, password) => {
  try {
    // Appel à l'API backend Laravel pour la connexion
    const response = await axios.post('http://127.0.0.1:8000/api/login', {
      email,
      password,
    });

    // Affichage de la réponse complète pour vérifier la structure
    console.log('Réponse du serveur:', response.data);

    // Vérification et gestion du token
    if (response.data && response.data.token) {
      console.log('Connexion réussie !');
      
      localStorage.setItem('token', response.data.token);

      // Vérification du rôle et redirection
      const userRole = response.data.user.role; 

      if (userRole === 'receptioniste') {
        window.location.href = '../receptionnistes/accueil.html'; 
      } else if (userRole === 'client') {
        window.location.href = 'index.html'; 
      } else {
        console.log('Rôle inconnu, redirection par défaut');
        window.location.href = '/page-accueil'; 
      }
    } else {
      console.log('Échec de la connexion : Pas de token');
    }
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
  }
};


// Gestion de l'événement de soumission du formulaire
document.getElementById('loginform').addEventListener('submit', async function (event) {
  event.preventDefault();

  const email = event.target.email.value;
  const password = event.target.password.value;


  await loginUser(email, password);
});



