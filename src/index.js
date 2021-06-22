import './sass/main.scss';
// Imports
import './js/input-change';
import menu from './data/menu.json';
import menuCard from './template/menu-card.hbs';
import { buildMenuList } from './js/create-markup';
import refs from './js/refs';

// Create markup
buildMenuList(refs.menuList, menuCard, menu);
