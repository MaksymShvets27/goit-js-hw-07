import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector(".gallery");

const ulArr = galleryItems.map((item) => {
    const divRef = document.createElement("div");
    divRef.classList.add("gallery__item");


    const aRef = document.createElement("a");
    aRef.setAttribute("href", `${item.original}`);
    aRef.classList.add("gallery__link");

    const imgRef = document.createElement("img");
    imgRef.setAttribute("src", `${item.preview}`);
    imgRef.setAttribute("data-source", `${item.original}`);
    imgRef.setAttribute("alt", `${item.description}`);
    imgRef.classList.add("gallery__image");

    aRef.append(imgRef);
    divRef.append(aRef);
    return divRef;
});
galleryRef.append(...ulArr);


function onGallery(event) {
    event.preventDefault();


    const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${event.target.dataset.source}" width="800" height="600">
    </div>
`);

    instance.show();
    // event.addEventListener("keydown", (event) => {
    //     if (event.code === "Escape") {
    //         instance.close();
    //     }
    // });
}
galleryRef.addEventListener("click", onGallery);



