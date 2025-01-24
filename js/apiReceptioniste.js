document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('chambreForm');
    
    if (form) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            
            const formData = new FormData(form);
            const token = localStorage.getItem('token');
            
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/chambres', formData, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data',
                    }
                });
                
                alert('Chambre ajoutée avec succès !');
                window.location.href = '../receptionnistes/chambres.html'; // Rediriger vers la page de réceptionniste
            } catch (error) {
                console.error('Erreur lors de l\'ajout de la chambre:', error);
                alert('Une erreur est survenue. Veuillez réessayer.');
            }
        });
    } else {
        console.error('Formulaire non trouvé');
    }
});