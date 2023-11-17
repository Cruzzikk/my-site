import { isEscEvent } from './util.js';
import { mainPinMarker } from './map.js';
import { validateForm } from './validateForm.js';
import { sendData } from './api.js';

validateForm();

const form = document.querySelector('.ad-form');
const address = form.querySelector('#address');
const successTemplate = document.querySelector('#success').content;
const success = successTemplate.querySelector('.success');
const errorTemplate = document.querySelector('#error').content;
const error = errorTemplate.querySelector('.error');


const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeMessageEsc();
  }
};

const openMessageEsc = () => {
  success.classList.remove('hidden');
  error.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
};

const closeMessageEsc = () => {
  success.classList.add('hidden');
  error.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
};

const onPopupClick = (evt) => {
  evt.preventDefault();
  closeMessageClick();
}

const openMessageClick = () => {
  success.classList.remove('hidden');
  error.classList.remove('hidden');
  success.addEventListener('click', onPopupClick);
  error.addEventListener('click', onPopupClick);
}

const closeMessageClick = () => {
  success.classList.add('hidden');
  error.classList.add('hidden');
  success.removeEventListener('click', onPopupClick);
  error.removeEventListener('click', onPopupClick);
}

// В случае успеха показать сообщение и сбросить все значения
const showSuccessMessage = () => {
  returnValue();
  document.body.append(successTemplate);
  openMessageEsc();
  openMessageClick();
}

// В случае ошибки показать сообщение
const showErrorMessage = () => {
  document.body.append(errorTemplate);
  openMessageEsc();
  openMessageClick();
}

//Возврат исходных значений
const returnValue = () => {
  form.reset();
  mainPinMarker.setLatLng([35.693269, 139.757123]);
  address.value = mainPinMarker.getLatLng().lat.toFixed(5) + ', ' + mainPinMarker.getLatLng().lng.toFixed(5);
  form.querySelector('#price').setAttribute('placeholder', '5000');
}

//Нажатие на кнопку очистить
const clickButtonReset = (reset) => {
  const buttonReset = document.querySelector('.ad-form__reset');
  buttonReset.addEventListener('click', (evt) => {
    evt.preventDefault();
    reset();
  });
}

//Отправка формы, в случае успеха сброс значений. Предусмотрена ошибка
const setUserFormSubmit = (onSuccess, onFail) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => onFail(),
      new FormData(evt.target),
    );
  });
}

clickButtonReset(returnValue);

export { showSuccessMessage, setUserFormSubmit, showErrorMessage }
