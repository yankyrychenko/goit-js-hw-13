import './style.scss';
import galleryMarkup from './templates/gallery-markup.hbs';
import { fetchGallery, loadMorePictures } from './js/apiService.js';

const gallery = document.querySelector('.gallery');
const submitBtn = document.querySelector('.js-submit');
const input = document.querySelector('.js-input');
const loadMoreBtn = document.querySelector('.js-loadmore');

submitBtn.addEventListener('click', createGallery);
loadMoreBtn.addEventListener('click', loadMore);

let inputText = '';

function createMarkup(searchQuery) {
  gallery.insertAdjacentHTML('beforeend', galleryMarkup(searchQuery));
}

function createGallery(event) {
  event.preventDefault();
  inputText = input.value;
  gallery.innerHTML = '';

  if (!input.value.length) {
    gallery.innerHTML = '';
    loadMoreBtn.classList.add('is-hidden');
    return;
  }

  fetchGallery(inputText).then(data => {
    if (data.hits.length) {
      loadMoreBtn.classList.remove('is-hidden');
      createMarkup(data.hits);
    }
  });
}

function loadMore() {
  loadMorePictures(inputText).then(data => {
    createMarkup(data.hits);
    window.scrollTo({
      top: document.documentElement.offsetHeight - 100,
      behavior: 'smooth',
    });
  });
}
