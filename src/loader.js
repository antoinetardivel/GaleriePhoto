window.addEventListener("load", (e) => {
    setTimeout(() => {
        document.getElementById('Rect').style.transform = 'translateX(0)'
    }, 2500);
    setTimeout(() => {
        document.getElementById('transiBleu').style.height = '100%'
    }, 4000);
    setTimeout(() => {
        document.getElementById('transiBlanc').style.height = '100%'
    }, 4300);
    setTimeout(() => {
        document.getElementById('transiNoir').style.height = '100%'
    }, 4600);
    setTimeout(() => {
        document.getElementById('chargement').style.opacity = '0'
        document.getElementById('transiBleu').style.opacity = '0'
        document.getElementById('transiBlanc').style.opacity = '0'
        document.getElementById('transiNoir').style.opacity = '0'
        document.getElementById("chargement").style.pointerEvents  = "none"
        document.getElementById("transiBleu").style.pointerEvents  = "none"
        document.getElementById("transiBlanc").style.pointerEvents  = "none"
        document.getElementById("transiNoir").style.pointerEvents  = "none"
    }, 4900);

    setTimeout(() => {

        document.getElementById("transiBleu").style.pointerEvents  = "inherit"
        document.getElementById("transiBlanc").style.pointerEvents  = "inherit"
        document.getElementById("transiNoir").style.pointerEvents  = "inherit"
        
        document.getElementById('transiBleu').style.height = '0%'
        document.getElementById('transiBlanc').style.height = '0%'
        document.getElementById('transiNoir').style.height = '0%'
    }, 5600);
    setTimeout(() => {
        document.getElementById('transiBleu').style.opacity = '1'
        document.getElementById('transiBlanc').style.opacity = '1'
        document.getElementById('transiNoir').style.opacity = '1'
    }, 6300);
})