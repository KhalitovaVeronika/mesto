const popup = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonClose = document.querySelector('.popup__close-button');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

let nameInput = document.querySelector('#name');
let descriptionInput = document.querySelector('#description');

function openPopup(){
  popup.classList.remove('popup_hidden');
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
}

function closePopup(){
  popup.classList.add('popup_hidden');
}

buttonEdit.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);


