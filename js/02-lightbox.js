import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector(".gallery");

const ulArr = galleryItems.map((item) => {
    const aRef = document.createElement("a");
    aRef.setAttribute("href", `${item.original}`);
    aRef.classList.add("gallery__link");

    const imgRef = document.createElement("img");
    imgRef.setAttribute("src", `${item.preview}`);
    imgRef.setAttribute("data-source", `${item.original}`);
    imgRef.setAttribute("alt", `${item.description}`);
    imgRef.classList.add("gallery__image");

    aRef.append(imgRef);
    return aRef;
});

galleryRef.append(...ulArr);
const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });
console.log(galleryItems);
