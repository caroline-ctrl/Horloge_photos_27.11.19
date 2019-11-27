//Horloge et date
let boite = document.getElementById('p2');
let boite2 = document.getElementById('p1');

function horloge() {
    let heure = new Date();
    let date = heure.toLocaleString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    boite2.innerHTML = date;
    boite.innerHTML = heure.getHours() + " : " + heure.getMinutes() + " : " + heure.getSeconds();


    //images qui défilent en fonction des secondes
    let tableauImg = ['dog1.jpg', 'dog2.jpg', 'dog3.jpg', 'dog4.jpg'];
    if (heure.getSeconds() >= 0 && heure.getSeconds() < 15) {
        image.innerHTML = '<img src="' + tableauImg[0] + '" alt="carousel">';
    } else if (heure.getSeconds() >= 15 && heure.getSeconds() < 30) {
        image.innerHTML = '<img src="' + tableauImg[1] + '" alt="carousel">';
    } else if (heure.getSeconds() >= 30 && heure.getSeconds() < 45) {
        image.innerHTML = '<img src="' + tableauImg[2] + '" alt="carousel">';
    } else if (heure.getSeconds() >= 45 && heure.getSeconds() < 60) {
        image.innerHTML = '<img src="' + tableauImg[3] + '" alt="carousel">';
    };


    //bordures qui change en fonction du jour    
    if (heure.getHours() >= 0 && heure.getHours() < 6) {
        image.style.border = "4mm ridge black";
    } else if (heure.getHours() >= 6 && heure.getHours() < 12) {
        image.style.border = "4mm ridge red";
    } else if (heure.getHours() >= 12 && heure.getHours() < 18) {
        image.style.border = "4mm ridge blue";
    } else if (heure.getHours() >= 18 && heure.getHours() < 24) {
        image.style.border = "4mm ridge green";
    }


}
setInterval('horloge()', 1000);




