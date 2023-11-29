import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '39839865-cab33150dc8a84cb79ec8f421';

export const fetchImages = async (dateQuery, currentPage, perPage) => {
  const params = new URLSearchParams({
    key: KEY,
    q: dateQuery.split('/')[1],
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: currentPage,
    per_page: perPage,
  });

  const response = await axios.get(`${BASE_URL}?${params}`);
  return response.data;
};
