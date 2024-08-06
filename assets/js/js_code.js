function updateClock() {
    // Obtenir l'heure actuelle
    const now = new Date();

    // Formater les heures, minutes et secondes pour qu'ils soient toujours deux chiffres
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Mettre à jour l'élément HTML avec l'ID 'clock'
    document.getElementById('clock').innerText = hours + ':' + minutes + ':' + seconds;
}

// Appeler la fonction updateClock toutes les secondes
setInterval(updateClock, 1000);

// Initialiser l'affichage de l'heure
updateClock();
