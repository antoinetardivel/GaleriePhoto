const cursor = document.getElementById('cursor')
const ball = document.getElementById('ball')
window.addEventListener("load", (e) => {
    let scaled = false
    document.addEventListener('mousemove', (e) => {
        cursor.setAttribute('style', `top:${e.pageY-15}px; left:${e.pageX-15}px;`)
        if(scaled){
            ball.style.transform = 'scale(3)'
        }else{
            ball.style.transform = 'scale(1)'
        }
    })
    
    let el = document.getElementsByClassName("cursorHover");
    for (i in el){
        el[i].addEventListener("mouseenter", (e) =>{
            scaled = true
        });
        el[i].addEventListener("mouseleave", (e) =>{
            scaled = false
        });
    }
})