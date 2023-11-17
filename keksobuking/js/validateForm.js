//Минимальная цена за ночь от типа жилья
const changePriceForTypeHouse = (type, price) => {
  type.addEventListener('change', (evt) => {
    if (evt.target.value === 'bungalow') {
      price.placeholder = 0;
      price.min = 0;
    } else if (evt.target.value === 'flat') {
      price.placeholder = 1000;
      price.min = 1000;
    } else if (evt.target.value === 'house') {
      price.placeholder = 5000;
      price.min = 5000;
    } else if (evt.target.value === 'palace') {
      price.placeholder = 10000;
      price.min = 10000;
    }
  });
}

//Время заезда и время выезда взаимосвязаны
const changeInAndOutTime = (timeOne, timeSecond) => {
  timeOne.addEventListener('change', (evt) => {
    for (let i = 0; i <= timeSecond.options.length - 1; i++) {
      if (evt.target.value === '12:00' && timeSecond.options[i].value === '12:00') {
        timeSecond[i].selected = true;
      } else if (evt.target.value === '13:00' && timeSecond.options[i].value === '13:00') {
        timeSecond[i].selected = true;
      } else if (evt.target.value === '14:00' && timeSecond.options[i].value === '14:00') {
        timeSecond[i].selected = true;
      }
    }
  });
}

//Кол-во гостей от кол-ва комнат
const changeCapacityForRooms = (rooms, capacity) => {
  rooms.addEventListener('change', (evt) => {
    for (let i = 0; i <= capacity.length - 1; i++) {
      if (evt.target.value === '1') {
        capacity[0].disabled = true;
        capacity[1].disabled = true;
        capacity[2].disabled = false;
        capacity[3].disabled = true;
        capacity[2].selected = true;
      } else if (evt.target.value === '2') {
        capacity[0].disabled = true;
        capacity[1].disabled = false;
        capacity[2].disabled = false;
        capacity[3].disabled = true;
        capacity[1].selected = true;
      } else if (evt.target.value === '3') {
        capacity[0].disabled = false;
        capacity[1].disabled = false;
        capacity[2].disabled = false;
        capacity[3].disabled = true;
        capacity[0].selected = true;
      } else if (evt.target.value === '100') {
        capacity[0].disabled = true;
        capacity[1].disabled = true;
        capacity[2].disabled = true;
        capacity[3].disabled = false;
        capacity[3].selected = true;
      }
    }
  });
}

//Валидация формы
const validateForm = () => {
  const form = document.querySelector('.ad-form');
  const avatar = form.querySelector('#avatar');
  const titleInput = form.querySelector('#title');
  const typeHouse = form.querySelector('#type');
  const priceInput = form.querySelector('#price');
  const timeIn = form.querySelector('#timein');
  const timeOut = form.querySelector('#timeout');
  const rooms = form.querySelector('#room_number');
  const capacity = form.querySelector('#capacity');
  const address = form.querySelector('#address');
  const images = form.querySelector('#images');

  avatar.setAttribute('accept', 'image/*');
  images.setAttribute('accept', 'image/*');

  titleInput.setAttribute('required', 'required');
  titleInput.setAttribute('minlength', '30');
  titleInput.setAttribute('maxlength', '100');

  priceInput.setAttribute('required', 'required');
  priceInput.setAttribute('type', 'number');
  priceInput.setAttribute('min', '5000');
  priceInput.setAttribute('max', '1000000');
  priceInput.setAttribute('placeholder', '5000');

  address.setAttribute('readonly','readonly');

  changePriceForTypeHouse(typeHouse, priceInput);
  changeInAndOutTime(timeIn, timeOut);
  changeInAndOutTime(timeOut, timeIn);
  changeCapacityForRooms(rooms, capacity);

}

export { validateForm };
