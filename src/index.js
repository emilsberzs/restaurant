import './styles.css';
import { homePage } from './home';


//REWRITE HEADER AND NAVBAR IN SEPERATE MODEL
const loadHeader = function () {
    const content = document.getElementById('content')
    const header = document.createElement('header')
    const navbar = document.createElement('nav')
    //HEADER
    const mainTitle = document.createElement('h1')
    mainTitle.innerHTML = 'Restaurante'
    //NAVBAR
    const home = document.createElement('a')
    home.setAttribute('href', '#')
    home.innerHTML = 'HOME'
    const menu = document.createElement('a')
    menu.setAttribute('href', '#')
    menu.innerHTML = 'MENU'
    const contact = document.createElement('a')
    contact.setAttribute('href', '#')
    contact.innerHTML = 'CONTACT US'
    navbar.append(home, menu, contact)
    header.appendChild(mainTitle);
    content.appendChild(header);
    content.appendChild(navbar);
}


loadHeader()
homePage()