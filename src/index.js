import './styles.css';
import { homePage } from './home';
import { loadHeader } from './header';
import { menuBuilder } from './menu';



loadHeader()
homePage()

const menuButton = document.getElementById('menuButton')
menuButton.addEventListener('click', function () {
    while (document.querySelector('main').firstChild) {
        document.querySelector('main').removeChild(document.querySelector('main').firstChild)
    }
    menuBuilder()
})
