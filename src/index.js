import './style.scss';
import galleryTemplate from './templates/gallery-markup.hbs';
import { fetchPictures, loadMorePictures } from './js/apiService.js';

const gallery = document.querySelector('.js-gallery');
const input = document.querySelector('.js-input');
const submitBtn = document.querySelector('.js-submit');
const loadMoreBtn = document.querySelector('.js-loadmore');

submitBtn.addEventListener('click', createMarkup);
loadMoreBtn.addEventListener('click', loadMore);

function createMarkup(event) {
  event.preventDefault();

  gallery.innerHTML = '';

  if (!input.value.length) {
    gallery.innerHTML = '';
    return;
  }

  fetchPictures(input.value).then(data => {
    loadMoreBtn.classList.remove('is-hidden');
    onPictureSearch(data.hits);
    return;
  });
}

function loadMore() {
  loadMorePictures(input.value).then(data => {
    onPictureSearch(data.hits);
    window.scrollTo({
      top: document.documentElement.offsetHeight - 100,
      behavior: 'smooth',
    });
  });
}

function onPictureSearch(searchQuery) {
  gallery.insertAdjacentHTML('beforeend', galleryTemplate(searchQuery));
}
