const receptionniste = [
    { 
        id: 1, client: "Mouhamadou Moustapha",
        chambre: "Chambre 101",
        dateDebut: "2025-01-21",
        dateFin: "2025-01-23",
        status: "Confirmée"
    },
    {
        id: 2,
        client: "Aminata Diallo",
        chambre: "Chambre 102",
        dateDebut: "2025-01-22",
        dateFin: "2025-01-24",
        status: "Non confirmée"
    },
    { 
        id: 3,
        client: "Omar Sow",
        chambre: "Chambre 103",
        dateDebut: "2025-01-23",
        dateFin: "2025-01-25",
        status: "Confirmée"
    },
    { 
        id: 4,
        client: "Fatou Ndiaye",
        chambre: "Chambre 104",
        dateDebut: "2025-01-24",
        dateFin: "2025-01-26",
        status: "Non confirmée"
    },
    {
        id: 5,
        client: "Ibrahime Fall",
        chambre: "Chambre 105",
        dateDebut: "2025-01-25",
        dateFin: "2025-01-27",
        status: "Confirmée" }
];

const tableBody = document.getElementById('reservationTable');

receptionniste.forEach(reservation => {
    const row = document.createElement('tr');

    row.innerHTML = `
        <th scope="row">${reservation.id}</th>
        <td>${reservation.client}</td>
        <td>${reservation.chambre}</td>
        <td>${reservation.dateDebut}</td>
        <td>${reservation.dateFin}</td>
        <td><span class="badge ${reservation.status === 'Confirmée' ? 'bg-success' : 'bg-danger'}">${reservation.status}</span></td>
    `;

    tableBody.appendChild(row);
});


/*



async function getReservations() {
    try {
        const response = await fetch('https://votre-api-laravel.com/api/reservations', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer votre_token' 
            }
        });
        
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des réservations');
        }
        
        const data = await response.json(); 
        console.log(data);
    } catch (error) {
        console.error('Erreur:', error); 
    }
}

getReservations(); 
*/