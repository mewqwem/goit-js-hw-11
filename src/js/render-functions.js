import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(image => {
      return `
        <li class="gallery-item">
          <a class="gallery-link" href="${image.largeImageURL}">
            <img 
              class="gallery-image" 
              src="${image.webformatURL}" 
              alt="${image.tags}" 
            />
          </a>
          <div class="info">
            <div class="info-item"><b>Likes</b><span>${image.likes}</span></div>
            <div class="info-item"><b>Views</b><span>${image.views}</span></div>
            <div class="info-item"><b>Comments</b><span>${image.comments}</span></div>
            <div class="info-item"><b>Downloads</b><span>${image.downloads}</span></div>
          </div>
        </li>`;
    })
    .join('');

  gallery.innerHTML = markup;

  lightbox.refresh();
}
export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('is-active');
}

export function hideLoader() {
  loader.classList.remove('is-active');
}
