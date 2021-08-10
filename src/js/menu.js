import menuCard from '../templates/card.hbs';
import menuItems from '../menu.json';

const menuRef = document.querySelector('.js-menu');
const menuMarkup = createCardsMenu(menuItems);

menuRef.insertAdjacentHTML('beforeend', menuMarkup);

function createCardsMenu(menuItems) {
  return menuItems.map(menuCard).join('');

};