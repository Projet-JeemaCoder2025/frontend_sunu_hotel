console.log("Le fichier script.js est chargé !");

const afficherChambres = async () => {
    try {
        const token = localStorage.getItem('token');
        console.log('Token:', token);
        
        // Vérification si le token existe
        if (!token) {
            throw new Error("Token manquant. Veuillez vous reconnecter.");
        }

        const response = await axios.get('http://127.0.0.1:8000/api/chambres', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('Données renvoyées par l’API :', response.data);

        // Extraire les chambres, selon le format de votre API
        const chambres = response.data.data || []; 
        console.log('Liste des chambres :', chambres);

        const chambresContainer = document.querySelector('.list-group');
        if (!chambresContainer) {
            console.error("Erreur : l'élément '.list-group' est introuvable dans le DOM.");
            return;
        }

        chambresContainer.innerHTML = ''; // Réinitialisation de la liste

        if (chambres.length === 0) {
            chambresContainer.innerHTML = `
                <li class="list-group-item text-center">
                    <div class="alert alert-info">
                        <i class="bi bi-info-circle me-2"></i>
                        Aucune chambre n'a été trouvée. Commencez par ajouter une chambre.
                    </div>
                </li>
            `;
            return;
        }

        // Affichage des chambres
        chambres.forEach(chambre => {
            const chambreElement = document.createElement('li');
            chambreElement.classList.add('list-group-item', 'd-flex', 'flex-column', 'flex-md-row', 'justify-content-between', 'align-items-start', 'mb-3', 'p-3', 'shadow-sm');
            chambreElement.innerHTML = `
                <div class="flex-grow-1">
                    <h5 class="fw-bold mb-2">${chambre.nom || 'Chambre sans nom'}</h5>
                    <p class="mb-1">Prix : <strong>${chambre.prix || 'N/A'} FCFA</strong></p>
                    <p class="mb-2">Disponible : <strong>${chambre.disponibilite ? 'Oui' : 'Non'}</strong></p>
                </div>
                <div class="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-2">
                    <a href="consulter_chambre.html?id=${chambre.id}" class="btn btn-primary btn-sm">
                        <i class="bi bi-eye me-1"></i> Consulter
                    </a>
                    <a href="modifier_chambre.html?id=${chambre.id}" class="btn btn-warning btn-sm text-white">
                        <i class="bi bi-pencil me-1"></i> Modifier
                    </a>
                    <button class="btn btn-danger btn-sm" onclick="supprimerChambre(${chambre.id})">
                        <i class="bi bi-trash me-1"></i> Supprimer
                    </button>
                </div>
            `;
            chambresContainer.appendChild(chambreElement);
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des chambres :', error);
        
        const chambresContainer = document.querySelector('.list-group');
        if (chambresContainer) {
            chambresContainer.innerHTML = `
                <li class="list-group-item text-center">
                    <div class="alert alert-danger">
                        <i class="bi bi-exclamation-triangle me-2"></i>
                        Impossible de charger les chambres. Vérifiez votre connexion ou réessayez plus tard.
                    </div>
                </li>
            `;
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const chambresContainer = document.querySelector('.list-group');
    if (!chambresContainer) {
        console.error('Erreur : élément .list-group introuvable');
        return;
    }

    afficherChambres();
});
