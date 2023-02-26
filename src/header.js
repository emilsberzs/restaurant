export const loadHeader = function () {
    const content = document.getElementById('content')
    const header = document.createElement('header')
    const navbar = document.createElement('nav')
    //HEADER
    const mainTitle = document.createElement('h1')
    mainTitle.innerHTML = 'Restaurante'
    //NAVBAR
    const home = document.createElement('a')
    home.setAttribute('href', '#')
    home.setAttribute('id', 'homeButton')
    home.innerHTML = 'HOME'
    const menu = document.createElement('a')
    menu.setAttribute('href', '#')
    menu.setAttribute('id', 'menuButton')
    menu.innerHTML = 'MENU'
    const contact = document.createElement('a')
    contact.setAttribute('href', '#')
    contact.setAttribute('id', 'contactButton')
    contact.innerHTML = 'CONTACT US'
    navbar.append(home, menu, contact)
    header.appendChild(mainTitle);
    content.appendChild(header);
    content.appendChild(navbar);
}
