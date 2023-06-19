var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

function logIn() {
    const overlay = $('.overlay')
    const screen = $('.form-register')

    overlay.style.display = 'block'
    overlay.style.animation = 'show1 0.5s linear'
    screen.style.display = 'block'
    screen.style.animation = 'show 0.6s ease-out'
}

function closeForm() {
    const overlay = $('.overlay')
    const screen = $('.form-register')
    const form = $('.text-white')
    
    screen.addEventListener('click', () => {
        overlay.style.display = 'none'
        screen.style.display = 'none'
    })

    form.addEventListener('click', (e) => {
        e.stopPropagation()
    })
}

function navOnTop() {
    const navTop = $('header > .p-4')
    document.onscroll = () => {
        if (window.scrollY > 142) {
            navTop.classList.add('nav-scroll')
            navTop.classList.remove('p-4')
        }
        else {
            navTop.classList.remove('nav-scroll')
            navTop.classList.add('p-4')
        }
    }
}

function run() {
    closeForm()
    navOnTop()
}

run()