/* global L:readonly */
import { openLoadState } from './loadState.js';
import { getData } from './api.js';
import { createAnnouncement } from './thumbnail.js';
import { showAlert } from './util.js';

const map = L.map('map-canvas')
  .on('load', () => {
    openLoadState();
    getData(
      (apartments) => createAnnouncement(apartments),
      () => showAlert('Не удалось получить данные с сервера. Попробуйте ещё раз'),
    );
  })
  .setView({
    lat: 35.681729,
    lng: 139.753927,
  }, 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../leaflet/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

export const mainPinMarker = L.marker(
  {
    lat: 35.693269,
    lng: 139.757123,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
mainPinMarker.addTo(map);

const address = document.querySelector('#address');
address.value = mainPinMarker.getLatLng().lat.toFixed(5) + ', ' + mainPinMarker.getLatLng().lng.toFixed(5);

mainPinMarker.on('move', (evt) => {
  address.value = evt.target.getLatLng().lat.toFixed(5) + ', ' + evt.target.getLatLng().lng.toFixed(5);
});

const createMarker = (lat, lng, popup) => {

  const pinIcon = L.icon({
    iconUrl: '../leaflet/img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const pinMarker = L.marker({
    lat,
    lng,
  },
  {
    icon: pinIcon,
  },
  );
  pinMarker
    .addTo(map)
    .bindPopup(
      popup,
    );
}
export {createMarker};
