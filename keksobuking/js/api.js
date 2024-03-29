const getData = (onSuccess, onFail) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((response) => onSuccess(response))
    .catch(() => {
      onFail('Не удалось получить данные с сервера. Попробуйте ещё раз');
    });
}

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();

      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
}
export { getData, sendData }
