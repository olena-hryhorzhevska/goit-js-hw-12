import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const API_KEY = '50842900-bcdcb4b14e1b1067d3f853731';
const URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page) {

  const response = await axios.get(URL, {
    params: {
      key: API_KEY,
      q: query,
      per_page: 15,
      page,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  const images = response.data.hits;
  const totalHits = response.data.totalHits;
  return { images, totalHits };
}
