// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const paletteContainer = document.querySelector(".gallery");
const cardsMarkup = createImagCardsMarkup(galleryItems);

paletteContainer.insertAdjacentHTML("beforeend", cardsMarkup);

// paletteContainer.addEventListener("click", handlePaletteContainerClick);

function createImagCardsMarkup(galleryItems){
  return galleryItems.map(({preview, original, description}) => {
    return `  
         <div class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img class="gallery__image"
               src="${preview}"
               data-source="${original}"
               alt="${description} "
              />
            </a>
         </div> `
    }).join(" ");
    
};

 new SimpleLightbox('.gallery a',{ 

        captionsData: "alt",
        captionDelay: 250});

// Change code below this line

console.log(galleryItems);