export const serverLogIn = async (email, password) => {
  return fetch(`https://loft-taxi.glitch.me/auth`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
};

export const serverRegister = async (email, password, name, surname) => {
  return fetch(`https://loft-taxi.glitch.me/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name, surname }),
  })
    .then((res) => res.json())
};

export const serverGetCredentials = async (token) => {
  return fetch(`https://loft-taxi.glitch.me/card?token=${token}`)
    .then((res) => res.json())
};

export const serverSendCredentials = async ({cardNumber, expiryDate, cardName, cvc, token}) => {
  return fetch(`https://loft-taxi.glitch.me/card`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cardNumber, expiryDate, cardName, cvc, token }),
  })
    .then((res) => res.json())
    .then((data) => data.success);
};

export const serverGetAddressList = async () => {
  return fetch(`https://loft-taxi.glitch.me/addressList`)
    .then((res) => res.json())
};

export const serverGetRouteCoordinates = async (from, to) => {
  return fetch(`https://loft-taxi.glitch.me/route?address1=${from}&address2=${to}`)
    .then((res) => res.json())
};