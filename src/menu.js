export const menuBuilder = function () {
    const content = document.getElementById('content')
    const menuList = document.createElement('div')
    menuList.setAttribute('id', 'menuDiv')
    const menuItemOne = document.createElement('p')
    menuItemOne.setAttribute('id', 'menuItemOne')
    menuItemOne.innerHTML = 'Soup'
    const menuItemTwo = document.createElement('p')
    menuItemTwo.setAttribute('id', 'menuItemTwo')
    menuItemTwo.innerHTML = 'Potatoes'
    content.appendChild(menuItemOne)
    content.appendChild(menuItemTwo)
}