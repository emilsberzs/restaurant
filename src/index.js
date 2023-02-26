import './styles.css';

console.log('test test test')

function firstLoad() {
    //Initialize 'CONTENT' DIV
    const content = document.getElementById('content')
    const header = document.createElement('header')
    const navbar = document.createElement('nav')
    //SET NAVBAR LINKS
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
    content.appendChild(header);
    header.appendChild(navbar)
}


firstLoad()