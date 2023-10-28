const gallery = document.querySelector('.gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('caption');
const closeButton = document.querySelector('.close');

gallery.addEventListener('click', function (event) {
    if (event.target.tagName === 'IMG') {
        lightboxImage.src = event.target.src;
        lightboxCaption.textContent = event.target.nextElementSibling.textContent;
        lightbox.style.display = 'block';
    }
});

closeButton.addEventListener('click', function () {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', function (event) {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

lightboxImage.addEventListener('click', function (event) {
    event.stopPropagation();
});
