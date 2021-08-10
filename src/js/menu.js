import menuCard from '../templates/card.hbs';

import menuItems from '../menu.json';


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};



const menuRef = document.querySelector('.js-menu');
const menuMarkup = createCardsMenu(menuItems);

menuRef.insertAdjacentHTML('beforeend', menuMarkup);

function createCardsMenu(cards) {
  return cards.map(menuCard).join('');

};