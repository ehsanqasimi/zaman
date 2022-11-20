
let video = document.querySelector('.video')
video.disablePictureInPicture = true

//   nav



let navElement = document.querySelector('nav')
changeNav()
let toggleBtn = document.querySelector('.burger')


function toggle() {
    navElement.classList.toggle('show')
    if (toggleBtn.innerHTML === 'close') {
        toggleBtn.innerHTML = 'menu'
        document.body.style.overflowY = 'auto'
    } else {
        toggleBtn.innerHTML = 'close'
        document.body.style.overflowY = 'hidden'
    }
}
function close(){
    navElement.classList.remove('show')
    toggleBtn.innerHTML = 'menu'
    document.body.style.overflowY = 'auto'
}

//nav changes
if (toggleBtn != null) {
    toggleBtn.addEventListener('click', toggle)
} else {
    
}
window.addEventListener('resize', changeNav)
function changeNav() {
    if (window.innerWidth <= 900) {

        navElement.innerHTML = `
        <div class="logo">
            <a href="#home"><img src="./images/logo.svg" alt="logo"></a>
        </div>
        <ul class="links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#contact">Contact</a></li>
            <li class="free-qoute"><a href="#contact">Book your free Quote</a> </li>
        </ul>
        <span class="burger material-icons">
            menu
        </span>
        `
        let ul = document.querySelector('.links').children
        
            for (let i = 0; i < ul.length; i++) {
                const element = ul[i];
                console.log(element)
                element.addEventListener('click',close)
                
            }
    } else if (window.innerWidth >= 900) {
        navElement.innerHTML = `
            <ul class="sub-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
            </ul>
            <div class="logo">
                <a href="#home"><img src="./images/logo.svg" alt="logo"></a>
            </div>
            <ul class="sub-links">
                <li><a href="#process">process</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>
        `
    }
}