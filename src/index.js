import './sass/styles.scss';
import refs from './js/refs';
import fetchCountries from './js/fetchCountries';
import updateMarkup from './js/updateMarkup';

const debounce = require('lodash.debounce');

refs.input.addEventListener('input', debounce(handleTextInput, 500));

function handleTextInput(event) {
  const countryName = event.target.value;

  if (countryName === '') {
    return;
  }

  refs.wrapper.innerHTML = '';

  fetchCountries(countryName).then(updateMarkup);
}
