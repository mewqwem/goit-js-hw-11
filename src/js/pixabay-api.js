import axios from 'axios';

const API_KEY = '54688812-abefd5b120166b01d1b3bea24';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const searchParams = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(BASE_URL, { params: searchParams }).then(response => {
    return response.data;
  });
}
