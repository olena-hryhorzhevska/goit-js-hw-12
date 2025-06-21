import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more-btn');

form.addEventListener('submit', handleSubmit);
loadMoreBtn.addEventListener('click', handleLoadMore);

let page = 1;
let input = '';
let perPage = 15;
let totalPages = 0;

async function handleSubmit(event) {
  event.preventDefault();
  page = 1;
  clearGallery();
  showLoader();
  input = event.currentTarget.elements['search-text'].value;
  try {
    const { images, totalHits } = await getImagesByQuery(input, page);

    if (images.length > 0) {
      createGallery(images);
      totalPages = Math.ceil(totalHits / perPage);

      if (page < totalPages) {
        showLoadMoreButton();
      } else {
        hideLoadMoreButton();
      }
    } else {
      hideLoadMoreButton();
    }
  } catch (error) {

  } finally {
    hideLoader();
  }
}

function handleLoadMore() {
  page++;
  showLoader();
  getImagesByQuery(input, page)
    .then(({ images }) => {
      createGallery(images);
      showLoadMoreButton();
      if (page < totalPages) {
        showLoadMoreButton();
      } else {
        hideLoadMoreButton();
      }
    })
    .finally(() => hideLoader());
}
