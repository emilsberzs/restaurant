import './styles.css';
import { homePage } from './home';
import { loadHeader } from './header';
import { menuBuilder } from './menu';



loadHeader()
homePage()

const menuButton = document.getElementById('menuButton')
menuButton.addEventListener('click', menuBuilder)