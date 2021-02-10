const key = '20084320-731f9d372c1a5afe5fa0892cc';
let page = 1;

export function fetchPictures(searchQuery) {
  page = 1;
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${key}`;
  return fetch(url).then(res => res.json());
}

export function loadMorePictures(searchQuery) {
  page += 1;
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${key}`;
  return fetch(url).then(res => res.json());
}
