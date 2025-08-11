import initialCards from './data.js';

// DOM elements
const cardTemplate = document.querySelector('#card__template').content;
const cardsList = document.querySelector('.cards__list');
const imageViewModal = document.querySelector('#image-view-modal');
const modalImage = imageViewModal.querySelector('.modal__img');
const modalCaption = imageViewModal.querySelector('.modal__caption');
const modalCloseBtn = imageViewModal.querySelector('.modal__close-btn_type_preview');

// Functions
function openModal(modal) {
  modal.classList.add('modal_is-opened');
}

function closeModal(modal) {
  modal.classList.remove('modal_is-opened');
}

function createCard(cardData) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  // Add click listener to open the modal
  cardImage.addEventListener('click', () => {
    modalImage.src = cardData.link;
    modalImage.alt = cardData.name;
    modalCaption.textContent = cardData.name;
    openModal(imageViewModal);
  });

  return cardElement;
}

// Event listeners
modalCloseBtn.addEventListener('click', () => {
  closeModal(imageViewModal);
});

// Initial render
initialCards.forEach(cardData => {
  cardsList.append(createCard(cardData));
});