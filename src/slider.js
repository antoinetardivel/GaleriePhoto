import Splide from '@splidejs/splide';
const marquees = document.getElementById('marquees')
const infos = document.getElementById('descRow')
const next = document.getElementById('arrowNext')
const prev = document.getElementById('arrowPrev')
let sizeSlider = '80vh'
window.addEventListener("load", (e) => {
    if(window.innerHeight > window.innerWidth){
        sizeSlider = '57vh'
    }else{
        sizeSlider = '80vh'
    }
    let splide = new Splide( '#splide', {
        type     : 'loop',
        perPage  : 1,
        focus    : 'center',
        direction: 'ttb',
        height   : sizeSlider,
        // easing   : 'cubic-bezier(1,.01,0,1)',
        autoplay : true,
        interval : '5000',
        pauseOnHover: true,
        lazyLoad : 'nearby',
    } ).mount();
    // console.log(splide.options.height)
    document.getElementById('maxSlide').innerText = splide.length
    splide.on( 'move', (newIndex) => {
        marquees.style.transform = (`translateY(-${newIndex * 5}vw)`)
        if(window.innerHeight > window.innerWidth){
            infos.style.transform = (`translateX(-${newIndex * 51}vw)`)
        }else{
            infos.style.transform = (`translateX(-${newIndex * 21}vw)`)
        }
        document.getElementById('ActualSlide').innerText = newIndex + 1
    } );
    let firstDeltaWheel = 0
    let firstDeltaWheelStatus = false
    let wheelTurns = 0
    let swipeAllowed = true
    window.onwheel = (e) => {
        if(swipeAllowed){
            if(!firstDeltaWheelStatus){
                firstDeltaWheel = Math.sqrt(Math.pow(e.deltaY, 2))
                // console.log(`first: ${firstDeltaWheel}`)
                firstDeltaWheelStatus = true
            }
            if(e.deltaY > 0){
                // console.log('plus')
                wheelTurns = wheelTurns + firstDeltaWheel
                // console.log(wheelTurns)
                setTimeout(() =>{
                    wheelTurns = 0
                }, 50);
            }else{
                // console.log('moins')
                wheelTurns = wheelTurns - firstDeltaWheel
                // console.log(wheelTurns)
                setTimeout(() =>{
                    wheelTurns = 0
                }, 50);
            }
            if(wheelTurns >= (2*firstDeltaWheel)){
                // console.log('swipe +')
                splide.go( '+1' ); 
                wheelTurns = 0
                swipeAllowed = false
                setTimeout(() =>{
                    swipeAllowed = true
                }, 250);
            }
            if(wheelTurns <= (-2*firstDeltaWheel)){
                // console.log('swipe -')
                splide.go( '-1' ); 
                wheelTurns = 0
                swipeAllowed = false
                setTimeout(() =>{
                    swipeAllowed = true
                }, 250);
            }
        }
    }
    next.addEventListener('click', () =>{
        splide.go( '+1' ); 
    })
    prev.addEventListener('click', () =>{
        splide.go( '-1' ); 
    })
    setTimeout(() => {
        splide.go( '0' );
    }, 4700);
    window.addEventListener('resize', () => {
        if(window.innerHeight > window.innerWidth){
            splide.options.height = '57vh'
            // console.log(splide.options.height)
        }else{
            splide.options.height = '80vh'
            // console.log(splide.options.height)
        }
    })
});