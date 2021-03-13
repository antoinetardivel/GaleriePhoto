document.getElementById('goContact').style.cursor = "url(./images/contact.png) 8 8, auto";
document.getElementById('title').style.cursor = "url(./images/arrowCursor.png), auto";
document.getElementById('name').style.cursor = "url(./images/arrowCursor.png), auto";
document.getElementById('retour').style.cursor = "url(./images/arrowCursor.png), auto";
document.getElementById('logo').style.cursor = "url(./images/arrowCursor.png), auto";
document.getElementById('logo2').style.cursor = "url(./images/arrowCursor.png), auto";
document.getElementById('arrowPrev').style.cursor = "url(./images/arrowCursor.png), auto";
document.getElementById('arrowNext').style.cursor = "url(./images/arrowCursor.png), auto";
document.getElementById('nameLabel').style.cursor = "url(./images/arrowCursor.png), auto";
document.getElementById('storyLabel').style.cursor = "url(./images/arrowCursor.png), auto";
document.getElementById('emailLabel').style.cursor = "url(./images/arrowCursor.png), auto";
document.getElementById('instagram').style.cursor = "url(./images/instagram.png) 8 8, auto";
document.getElementById('behance').style.cursor = "url(./images/behance.png) 8 8, auto";
document.getElementById('linkedin').style.cursor = "url(./images/linkedin.png) 8 8, auto";
document.getElementById('submitButton').style.cursor = "url(./images/mail.png) 8 8, auto";
window.addEventListener("load", (e) => {
    let el = document.getElementsByClassName("galleryImage");
    for (i in el){
        el[i].style.cursor = "url(./images/scroll.png) 8 9, auto";
    }
})

document.getElementById('logo').src = "./images/logo.svg";
document.getElementById('logo2').src = "./images/logo.svg";
document.getElementById('planet').src = "./images/planet.svg";
document.getElementById('arrowPrev').src = "./images/logo.svg";
document.getElementById('arrowNext').src = "./images/logo.svg";
document.getElementById('navigationCircle').src = "./images/nextprevcircle.svg";
document.getElementById('body').style.backgroundImage = 'url(./images/bgGrain.jpg)'
document.getElementById('ContactPage').style.backgroundImage = 'url(./images/bgGrain.jpg)'
document.getElementById('chargement').style.backgroundImage = 'url(./images/bgGrain.jpg)'
const img1 = document.getElementById('image1').src = "./images/1.jpg";
const img2 = document.getElementById('image2').src = "./images/2.jpg";
const img3 = document.getElementById('image3').src = "./images/3.jpg";
const img4 = document.getElementById('image4').src = "./images/4.jpg";
const img5 = document.getElementById('image5').src = "./images/5.jpg";
const img6 = document.getElementById('image6').src = "./images/6.jpg";