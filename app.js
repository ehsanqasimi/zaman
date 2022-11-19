
let imageContainer = document.querySelector('.image')

for (let i = 1; i < 20; i++) {
    imageContainer.innerHTML += `<img src="./sliderImages/${i}.jpeg" alt="slider image">`
}
imageContainer.innerHTML += '<img src="./sliderImages/1.jpeg" alt="slider image">'

let index = 0

setInterval(() => {
    index++
    if (index === 20) {
        index = 0
        imageContainer.style.transition = 'none'
    } else {
        imageContainer.style.transition = 'transform 1s ease-in-out'
    }
    imageContainer.style.transform = 'translateX(-' + 100 * index + '%)'
}, 3000)


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