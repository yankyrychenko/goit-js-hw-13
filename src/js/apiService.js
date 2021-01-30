const key = '20084320-731f9d372c1a5afe5fa0892cc';
const baseUrl = 'https://pixabay.com/api/';

let page = 1;

function fetchGallery(inputText) {
  page = 1;
  const url = `${baseUrl}?image_type=photo&orientation=horizontal&q=${inputText}&page=${page}&per_page=12&key=${key}`;
  return fetch(url).then(res => res.json());
}

function loadMorePictures(inputText) {
  page += 1;
  const url = `${baseUrl}?image_type=photo&orientation=horizontal&q=${inputText}&page=${page}&per_page=12&key=${key}`;
  return fetch(url).then(res => res.json());
}

export { fetchGallery, loadMorePictures };
