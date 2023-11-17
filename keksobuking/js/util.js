const ALERT_SHOW_TIME = 5000;

// Случайное целое число (включенное)
const getRandomIntInclusive = (min, max) => {
  if (min >= 0 && max >= 0) {
    if (max < min) {
      [min, max] = [max, min];
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return -1;
  }
};

// Случайное число с плавующей точкой (включенное)
const getRandomFloatInclusive = (min, max, numberOfSigns) => {
  if (min >= 0 && max >= 0) {
    if (max < min) {
      [min, max] = [max, min];
    }
    return +(Math.random() * (max - min) + min).toFixed(numberOfSigns);
  } else {
    return -1;
  }
};

// Массив случайной длины
const getRandomArrayElement = (elements) => {
  return elements[getRandomIntInclusive(0, elements.length - 1)];
}


// Массив случайной длины без повторения элементов
const getRandomElementsArray = (arrayInit) => {
  const array = [];
  const lengthArray = getRandomIntInclusive(0, arrayInit.length - 1);
  while (array.length <= lengthArray) {
    const indexOfEl = getRandomIntInclusive(0, arrayInit.length - 1);
    const el = arrayInit[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
}

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 1000;
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.style.color = 'white';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

export {getRandomIntInclusive, getRandomFloatInclusive, getRandomArrayElement, getRandomElementsArray, showAlert, isEscEvent};
