const addAttribute = (array) => {
  for (let i = 0; i <= array.length - 1; i++) {
    array[i].setAttribute('disabled', 'disabled');
  }
}

const openInitialState = () => {
  const formNotice = document.querySelector('.ad-form');
  const fieldsets = formNotice.querySelectorAll('fieldset');
  const formFilters = document.querySelector('.map__filters');
  const filterSelects = formFilters.querySelectorAll('select');
  const filterFieldsets = formFilters.querySelectorAll('fieldset');

  formNotice.classList.add('ad-form--disabled');
  formFilters.classList.add('map__filters--disabled');

  addAttribute(fieldsets);
  addAttribute(filterSelects);
  addAttribute(filterFieldsets);
}

export { openInitialState };
