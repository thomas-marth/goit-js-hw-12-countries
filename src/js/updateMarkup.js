import countryTpl from '../templates/country.hbs';
import listTpl from '../templates/countriesList.hbs';
import refs from './refs';
import { success, error, notice } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

function updateMarkup(countries) {
  if (countries.length === undefined) {
    error({
      title:
        'Страны с таким названием не существует. Пожалуйста, уточните запрос!',
      hide: true,
      delay: 2000,
    });
  } else if (countries.length === 1) {
    success({
      title: 'Страна найдена!',
      hide: true,
      delay: 2000,
    });
    const markup = countryTpl(countries);
    refs.wrapper.insertAdjacentHTML('beforeend', markup);
  } else if (countries.length > 1 && countries.length < 11) {
    const markup = listTpl(countries);
    refs.wrapper.insertAdjacentHTML('beforeend', markup);
  } else {
    notice({
      title: 'Найдено слишком много совпадений. Пожалуйста, уточните запрос!',
      hide: true,
      delay: 2000,
    });
  }
}

export default updateMarkup;
