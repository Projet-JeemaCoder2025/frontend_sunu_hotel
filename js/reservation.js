let selectedRoom = {};
let currentStep = 1;

function openReservationForm(room, price, image) {
    selectedRoom = { room, price, image };
    document.getElementById('reservation-form').style.display = 'block';
    showStep(1);
}

function showRoomDescription(room) {
    const descriptions = {
        standard: "Chambre confortable avec lit double. Idéale pour une ou deux personnes.",
        luxe: "Chambre spacieuse avec un grand lit et une vue magnifique sur la mer.",
        suite: "Suite luxueuse avec salle de bain privée, grand salon et terrasse.",
    };

    document.getElementById('description-title').textContent = room.charAt(0).toUpperCase() + room.slice(1);
    document.getElementById('description-text').textContent = descriptions[room];
    document.getElementById('room-description').style.display = 'flex';
}

function closeDescription() {
    document.getElementById('room-description').style.display = 'none';
}

function showStep(step) {
    for (let i = 1; i <= 3; i++) {
        document.getElementById('step' + i).style.display = (i === step) ? 'block' : 'none';
    }

    if (step === 1) {
        document.getElementById('room-title').textContent = selectedRoom.room;
        document.getElementById('room-price').textContent = selectedRoom.price + '€';
        document.getElementById('room-image').src = selectedRoom.image;
    } else if (step === 3) {
        document.getElementById('totalPrice').textContent = selectedRoom.price;
    }
}

function nextStep(step) {
    currentStep = step + 1;
    showStep(currentStep);
}

function confirmPayment() {
    alert("Paiement confirmé pour la " + selectedRoom.room);
    // Ajoutez ici la logique pour traiter le paiement
}
