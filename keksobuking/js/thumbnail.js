import { openInitialState } from './initialState.js';
import { createMarker } from './map.js';

openInitialState();

const showFeatures = (featuresElement, featuresData, listFeatures) => {
  if (featuresData === undefined || featuresData === '' || featuresData === ' ') {
    listFeatures.classList.add('hidden');
  } else {
    let listFeaturesNew = [];

    for (let i = 0; i <= featuresElement.length - 1; i++) {
      for (let j = 0; j <= featuresData.length - 1; j++) {
        if (featuresElement[i].className.indexOf('--' + featuresData[j]) > 0) {
          listFeaturesNew.push(featuresElement[i]);
        }
      }
    }

    for (let i = featuresElement.length - 1; i >= 0; i--) {
      featuresElement[i].remove();
    }

    for (let i = 0; i <= listFeaturesNew.length - 1; i++) {
      listFeatures.appendChild(listFeaturesNew[i]);
    }
    return listFeatures;
  }
}

const showPhotos = (picture, photosData, photosDom) => {
  if (photosData === undefined || photosData === '' || photosData === ' ') {
    photosDom.classList.add('hidden');
  } else {
    picture.remove();

    for (let i = 0; i <= photosData.length - 1; i++) {
      const pictureClone = picture.cloneNode();
      pictureClone.src = photosData[i];
      photosDom.appendChild(pictureClone);
    }
    return photosDom;
  }
}

const diffType = (typeData, typeText) => {
  if (typeData === 'flat') {
    typeText.textContent = 'Квартира';
  } else if (typeData === 'bungalow') {
    typeText.textContent = 'Бунгало';
  } else if (typeData === 'house') {
    typeText.textContent = 'Дом';
  } else if (typeData === 'palace') {
    typeText.textContent = 'Дворец';
  }
  return typeText;
}

const diffRooms = (roomsData) => {
  let roomsText = '';
  if (roomsData === 1) {
    roomsText = ' комната для ';
  } else if (roomsData > 1 && roomsData <= 4) {
    roomsText = ' комнаты для ';
  } else {
    roomsText = ' комнат для ';
  }
  return roomsText;
}

const diffGuests = (guestsData) => {
  let guestsText = '';
  if (guestsData === 1) {
    guestsText = ' гостя';
  } else {
    guestsText = ' гостей';
  }
  return guestsText;
}

const hideBlock = (block, data) => {
  if (data === undefined || data === '' || data === ' ') {
    block.classList.add('hidden');
  }
}

//Принимаем данные с сервера и отрисовываем в попапе
const createAnnouncement = (similarApartments) => {
  const card = document.querySelector('#card').content;
  const popup = card.querySelector('.popup');

  for (let i = 0; i <= similarApartments.length - 1; i++) {
    const popupNew = popup.cloneNode(true);
    const title = popupNew.querySelector('.popup__title');
    const address = popupNew.querySelector('.popup__text--address');
    const price = popupNew.querySelector('.popup__text--price');
    const type = popupNew.querySelector('.popup__type');
    const capacity = popupNew.querySelector('.popup__text--capacity');
    const time = popupNew.querySelector('.popup__text--time');
    const description = popupNew.querySelector('.popup__description');
    const avatar = popupNew.querySelector('.popup__avatar');
    const listFeatures = popupNew.querySelector('.popup__features');
    const features = listFeatures.children;
    const photos = popupNew.querySelector('.popup__photos');
    const picture = photos.querySelector('img');
    const announcement = similarApartments[i];
    const offer = announcement.offer;
    const lat = announcement.location.lat;
    const lng = announcement.location.lng;

    //Передаем данные для маркера и его попапа на карте
    createMarker(lat, lng, popupNew);

    //Скрываем блок, если нет данных
    hideBlock(title, offer.title);
    hideBlock(address, offer.address);
    hideBlock(price, offer.price);
    hideBlock(type, offer.type);
    hideBlock(capacity, offer.rooms);
    hideBlock(capacity, offer.guests);
    hideBlock(time, offer.checkin);
    hideBlock(time, offer.checkout);
    hideBlock(description, offer.description);

    //Заполняем попап
    title.textContent = offer.title;
    address.textContent = offer.address;
    price.textContent = offer.price + ' ₽/ночь';
    diffType(offer.type, type);
    capacity.textContent = offer.rooms + diffRooms(offer.rooms) + offer.guests + diffGuests(offer.guests);
    time.textContent = 'Заезд после ' + offer.checkin + ', выезд до ' + offer.checkout;
    showFeatures(features, offer.features, listFeatures);
    description.textContent = offer.description;
    avatar.src = announcement.author.avatar;
    avatar.onerror = () => {
      avatar.remove();
    }

    showPhotos(picture, offer.photos, photos);
  }
}

export { createAnnouncement };
