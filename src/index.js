import './styles.css';
import { homePage } from './home';
import { loadHeader } from './header';
import { menuBuilder } from './menu';
import { contactPage } from './contact';
import { firstLoad } from './firstload';



loadHeader()
firstLoad()
const menuButton = document.getElementById('menuButton');
const homeButton = document.getElementById('homeButton');
const contactButton = document.getElementById('contactButton');
const main = document.querySelector('main');
//CLEAR ALL CONTENT FROM MAIN
function cleanMain() {
    while (main.firstChild) {
        main.removeChild(main.firstChild)
    }
}


menuButton.addEventListener('click', function () {
    cleanMain()
    cleanMain()
    menuBuilder()
})

homeButton.addEventListener('click', function () {
    cleanMain()
    cleanMain()
    homePage()
})

contactButton.addEventListener('click', function () {
    cleanMain()
    contactPage()
})