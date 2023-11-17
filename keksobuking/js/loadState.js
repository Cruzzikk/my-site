const removeAttribute = (array) => {
  for (let i = 0; i <= array.length - 1; i++) {
    array[i].removeAttribute('disabled', 'disabled');
  }
}

const openLoadState = () => {
  const formNotice = document.querySelector('.ad-form');
  const fieldsets = formNotice.querySelectorAll('fieldset');
  const formFilters = document.querySelector('.map__filters');
  const filterSelects = formFilters.querySelectorAll('select');
  const filterFieldsets = formFilters.querySelectorAll('fieldset');

  formNotice.classList.remove('ad-form--disabled');
  formFilters.classList.remove('map__filters--disabled');

  removeAttribute(fieldsets);
  removeAttribute(filterSelects);
  removeAttribute(filterFieldsets);
}

export { openLoadState };
