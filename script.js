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



    // if (heure.getSeconds() >= 0 && heure.getSeconds() < 15) {
    //     document.getElementById('image').innerHTML = "<img src='dog" + (Math.floor(Math.random() * 8) + 1) + ".jpg'>";
    // } else if (heure.getSeconds() >= 15 && heure.getSeconds() < 30) {
    //     document.getElementById('image').innerHTML = "<img src='dog" + (Math.floor(Math.random() * 8) + 1) + ".jpg'>";
    // } else if (heure.getSeconds() >= 30 && heure.getSeconds() < 45) {
    //     document.getElementById('image').innerHTML = "<img src='dog" + (Math.floor(Math.random() * 8) + 1) + ".jpg'>";
    // } else if (heure.getSeconds() >= 45 && heure.getSeconds() < 60) {
    //     document.getElementById('image').innerHTML = "<img src='dog" + (Math.floor(Math.random() * 8) + 1) + ".jpg'>";
    // };



    // images qui défilent en fonction des secondes
    //let tableauImg = ['dog1.jpg', 'dog2.jpg', 'dog3.jpg', 'dog4.jpg', 'dog5.jpg', 'dog6.jpg', 'dog7.jpg', 'dog8.jpg'];
    // if (heure.getSeconds() >= 0 && heure.getSeconds() < 15) {
    //     image.innerHTML = '<img src="' + tableauImg[0] + '" alt="carousel">';
    // } else if (heure.getSeconds() >= 15 && heure.getSeconds() < 30) {
    //     image.innerHTML = '<img src="' + tableauImg[1] + '" alt="carousel">';
    // } else if (heure.getSeconds() >= 30 && heure.getSeconds() < 45) {
    //     image.innerHTML = '<img src="' + tableauImg[2] + '" alt="carousel">';
    // } else if (heure.getSeconds() >= 45 && heure.getSeconds() < 60) {
    //     image.innerHTML = '<img src="' + tableauImg[3] + '" alt="carousel">';
    // };



    /*switch (aleatoire()) {
        case heure.getSeconds() >= 0:
        case heure.getSeconds() < 15:
            image.innerHTML = '<img src="' + aleatoire() + '" alt="carousel">';
            break;
        case heure.getSeconds() >= 15:
        case heure.getSeconds() < 30:
            image.innerHTML = '<img src="' + aleatoire() + '" alt="carousel">';
            break;
        case heure.getSeconds() >= 30:
        case heure.getSeconds() < 45:
            image.innerHTML = '<img src="' + aleatoire() + '" alt="carousel">';
            break;
        case heure.getSeconds() >= 45:
        case heure.getSeconds() < 60:
            image.innerHTML = '<img src="' + aleatoire() + '" alt="carousel">';
            break;

    }*/





    //bordures qui change en fonction du jour    
    if (heure.getHours() >= 0 && heure.getHours() < 6) {
        image1.style.border = "4mm ridge black";
    } else if (heure.getHours() >= 6 && heure.getHours() < 12) {
        image1.style.border = "4mm ridge red";
    } else if (heure.getHours() >= 12 && heure.getHours() < 18) {
        image1.style.border = "4mm ridge blue";
    } else if (heure.getHours() >= 18 && heure.getHours() < 24) {
        image1.style.border = "4mm ridge green";
    }


}
setInterval('horloge()', 1000);



let tab = ['dog1.jpg', 'dog2.jpg', 'dog3.jpg', 'dog4.jpg', 'dog5.jpg', 'dog6.jpg', 'dog7.jpg', 'dog8.jpg'];
let heure = new Date();
let secondes = 5;
let numero = -1;
let aleatoire = true;


function changerImage() {
    if (aleatoire) {
        let n = numero;
        while (n == numero) {
            n = Math.floor(Math.random() * tab.length);
        }
        numero = n;
    } else {
        numero++;
        if (numero >= tab.length) numero = 0;
    }
    document.getElementById('image1').src = tab[numero];
    setTimeout("changerImage();", secondes * 1000);
}
changerImage();