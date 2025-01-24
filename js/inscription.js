const inscription = [
    {
        first_name: "Rama",
        last_name: "FAYE",
        email: "fadiaba@exemple.com",
        phone_number: "771234567",
        password: "7180292020" 
    }
];

const form = document.querySelector("form");

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    if (validateForm()) {
        console.log("Validation réussie, appel de addDataName");
        showPopup("Inscription réussie !");
        addDataName();
        resetForm()
    } else {
        console.log("Validation échouée");
        showPopup("Inscription échouée. Veuillez vérifier vos informations.");
    }
});

function validateForm() {
    let isValid = true;
    let errorMessages = {};

    const firstName = document.getElementById("first_name");
    const firstNameRegex = /^[a-zA-Zàáâäãåèéêëìíîïòóôöõøùúûüÿ]+(\s[a-zA-Zàáâäãåèéêëìíîïòóôöõøùúûüÿ]+)?$/;
    if (!firstNameRegex.test(firstName.value)) {
        errorMessages.first_name = "Le prénom doit contenir uniquement des lettres, avec possibilité de deux prénoms.";
        isValid = false;
    } else {
        clearError('first_name');
    }

    const lastName = document.getElementById("last_name");
    const lastNameRegex = /^[a-zA-Zàáâäãåèéêëìíîïòóôöõøùúûüÿ]+$/;
    if (!lastNameRegex.test(lastName.value)) {
        errorMessages.last_name = "Le nom doit contenir uniquement des lettres.";
        isValid = false;
    } else {
        clearError('last_name');
    }

    const email = document.getElementById("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        errorMessages.email = "Veuillez entrer un email valide.";
        isValid = false;
    } else {
        clearError('email');
    }

    const phoneNumber = document.getElementById("phone_number");
    const phoneRegex = /^(7[05678])[0-9]{7}$/;
    if (!phoneRegex.test(phoneNumber.value)) {
        errorMessages.phone_number = "Le numéro de téléphone doit commencer par 70, 75, 76, 77 ou 78 suivi de 7 chiffres.";
        isValid = false;
    } else {
        clearError('phone_number');
    }

    const password = document.getElementById("password");
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordRegex.test(password.value)) {
        errorMessages.password = "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre.";
        isValid = false;
    } else {
        clearError('password');
    }

    for (const field in errorMessages) {
        const errorElement = document.getElementById(`${field}_error`);
        errorElement.textContent = errorMessages[field];
        setTimeout(() => {
            errorElement.textContent = '';
        }, 10000);
    }

    return isValid;
}

function clearError(field) {
    document.getElementById(`${field}_error`).textContent = '';
}

function addDataName() {
    try {
        const firstName = document.getElementById("first_name").value;
        const lastName = document.getElementById("last_name").value;
        const emailValue = document.getElementById("email").value;
        const phoneNumberValue = document.getElementById("phone_number").value;
        const passwordValue = document.getElementById("password").value;

        const newUser = {
            first_name: firstName,
            last_name: lastName,
            email: emailValue,
            phone_number: phoneNumberValue,
            password: passwordValue
        };

        inscription.push(newUser);
    } catch (error) {
        console.error("Erreur lors de l'ajout de l'utilisateur :", error);
    }
}

function showPopup(message) {
    document.getElementById('popupMessage').innerText = message;
    document.getElementById('popup').style.display = 'block';
}


function resetForm() {
    document.getElementById("first_name").value = "";
    document.getElementById("last_name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone_number").value = "";
    document.getElementById("password").value = "";
}