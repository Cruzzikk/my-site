import { getRandomIntInclusive, getRandomFloatInclusive, getRandomArrayElement, getRandomElementsArray } from './util.js';

const SIMILAR_ANNOUNCEMENT_COUNT = 10;
const AVATAR_NUM_ADDRESS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

// Создание массива с объектами
// const createAnnouncement = () => {
//   const locationX = getRandomFloatInclusive(35.65000, 35.70000, 5);
//   const locationY = getRandomFloatInclusive(139.70000, 139.80000, 5);
//   let imgAddress = 'img/avatars/user0';
//   if (AVATAR_NUM_ADDRESS >= 10) {
//     imgAddress = 'img/avatars/user';
//   }
//   return {
//     author: {
//       avatar: imgAddress + AVATAR_NUM_ADDRESS.shift() + '.png',
//     },
//     offer: {
//       title: 'Объявление о продаже квартиры',
//       address: locationX + ', ' + locationY,
//       price: getRandomIntInclusive(0, 5000),
//       type: getRandomArrayElement(TYPE),
//       rooms: getRandomIntInclusive(0, 10),
//       guests: getRandomIntInclusive(0, 20),
//       checkin: getRandomArrayElement(CHECKIN),
//       checkout: getRandomArrayElement(CHECKOUT),
//       features: getRandomElementsArray(FEATURES),
//       description: 'Продаю квартиру. Хорошая',
//       photos: getRandomElementsArray(PHOTOS),
//     },
//     location: {
//       x: locationX,
//       y: locationY,
//     },
//   };
// };





// const similarAnnouncement = [];
// const createAnnouncement = (similarApartments) => {
//   for (let i = 0; i <= similarApartments.length - 1; i++){
//     similarAnnouncement.push(similarApartments[i]);
//   }
// };

//const similarAnnouncement = new Array(SIMILAR_ANNOUNCEMENT_COUNT).fill(null).map(() => createAnnouncement(apartment));

// export { createAnnouncement };
