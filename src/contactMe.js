window.addEventListener("load", (e) => {
    const contact = document.getElementById('goContact')
    const retour = document.getElementById('titleRetour')
    contact.addEventListener('click', () => {
        
        setTimeout(() => {
            document.getElementById('transiBleu').style.height = '100%'
        }, 300);
        setTimeout(() => {
            document.getElementById('ContactPage').style.height = '100%'
            document.getElementById('ContactPage').style.opacity = '1'
            document.getElementById("ContactPage").style.pointerEvents  = "inherit"
        }, 800);
        setTimeout(() => {
            document.getElementById('transiBlanc').style.height = '100%'
        }, 600);

        setTimeout(() => {
            document.getElementById('transiBleu').style.opacity = '0'
            document.getElementById('transiBlanc').style.opacity = '0'
            document.getElementById('transiNoir').style.opacity = '0'

            document.getElementById("transiBleu").style.pointerEvents  = "none"
            document.getElementById("transiBlanc").style.pointerEvents  = "none"
            document.getElementById("transiNoir").style.pointerEvents  = "none"
        }, 1200);
        setTimeout(() => {
            document.getElementById("transiBleu").style.pointerEvents  = "inherit"
            document.getElementById("transiBlanc").style.pointerEvents  = "inherit"
            document.getElementById("transiNoir").style.pointerEvents  = "inherit"
            document.getElementById('transiBleu').style.height = '0%'
            document.getElementById('transiBlanc').style.height = '0%'
            document.getElementById('transiNoir').style.height = '0%'
        }, 2000);
        setTimeout(() => {
            document.getElementById('transiBleu').style.opacity = '1'
            document.getElementById('transiBlanc').style.opacity = '1'
            document.getElementById('transiNoir').style.opacity = '1'
        }, 2600);
    })
    retour.addEventListener('click', () => {
        document.getElementById('transiBleu').style.height = '100%'
        setTimeout(() => {
            document.getElementById('transiBlanc').style.height = '100%'
        }, 600);
        setTimeout(() => {
            document.getElementById('ContactPage').style.height = '0'
            document.getElementById('ContactPage').style.opacity = '0'
            document.getElementById("ContactPage").style.pointerEvents  = "none"
        }, 300);

        setTimeout(() => {
            document.getElementById('transiBleu').style.opacity = '0'
            document.getElementById('transiBlanc').style.opacity = '0'
            document.getElementById('transiNoir').style.opacity = '0'

            document.getElementById("transiBleu").style.pointerEvents  = "none"
            document.getElementById("transiBlanc").style.pointerEvents  = "none"
            document.getElementById("transiNoir").style.pointerEvents  = "none"
        }, 1200);
        setTimeout(() => {
            document.getElementById("transiBleu").style.pointerEvents  = "inherit"
            document.getElementById("transiBlanc").style.pointerEvents  = "inherit"
            document.getElementById("transiNoir").style.pointerEvents  = "inherit"
            document.getElementById('transiBleu').style.height = '0%'
            document.getElementById('transiBlanc').style.height = '0%'
            document.getElementById('transiNoir').style.height = '0%'
        }, 2000);
        setTimeout(() => {
            document.getElementById('transiBleu').style.opacity = '1'
            document.getElementById('transiBlanc').style.opacity = '1'
            document.getElementById('transiNoir').style.opacity = '1'
        }, 2700);
    })
})