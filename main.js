const button = document.querySelector('.menu-button')
const lines = document.querySelectorAll('.menu-button')
const overlay = document.querySelector('#overlay')
const header = document.querySelector('.header')
const main = document.querySelector('#main')
const body = document.querySelectorAll("body")[0]




function test() {
    setTimeout(() => {

        main.style.display = 'none';
        // main.style.opacity = 0;
        //body.style.display = 'block';


    }, 5000)
}

test()





let showmenu = false

button.addEventListener('click', () => {
    if (!showmenu) {

        button.classList.add('rotat')
        button.classList.add('close')
        overlay.classList.add('open');
        showmenu = true;
    } else {
        button.classList.remove('close')
        overlay.classList.add('close');
        button.classList.remove('rotat')
        showmenu = false;



    }
})

