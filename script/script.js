const popupCloseButtons = document.querySelectorAll(".popup__close-button");
const popupEdit = document.querySelector(".popup_type_edit");
const popupOpenEditBtn = document.querySelector(".profile__edit-button");
const popupEditForm = popupEdit.querySelector("#form-edit");
const nameProfile = document.querySelector(".profile__name");
const nameInput = popupEdit.querySelector(".popup__text_type_name");
const descriptionProfile = document.querySelector(".profile__description");
const descriptionInput = popupEdit.querySelector(".popup__text_type_description");


const cardsContainer = document.querySelector(".elements__container");
const elementTemplate = document.querySelector("#tempalate-card").content;

/*переменные попапа создания карточки (открыть/закрыть)*/
const popupAdd = document.querySelector(".popup_type_add");
const popupAddBtn = document.querySelector(".profile__add-button");
const popupAddForm = document.querySelector("#form-add");
const placeInput = popupAdd.querySelector(".popup__text_type_place");
const linkInput = popupAdd.querySelector(".popup__text_type_link");
const popupSaveButton = popupAdd.querySelector(".popup__save-button");


/*переменные попапа увеличения фотографии*/
const imgPopup = document.querySelector(".popup_type_img");

const fullCardImg = document.querySelector(".popup__full-photo");
const descriptionCardImg = document.querySelector (".popup__full-photo-description");

/*функция открытия попапа*/
function openPopup(popup) {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', closeWithEsc);
};

/*функция закрытия попапа*/
function closePopup(popup) {
  popup.classList.remove('popup_active');
  document.removeEventListener('keydown', closeWithEsc);
};

popupCloseButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener("click", () => closePopup(popup));
});

 
const overleyClosePopups = Array.from(document.querySelectorAll(".popup"));
overleyClosePopups.forEach((overley) => {
  overley.addEventListener("click", (evt) => {
    if (evt.target.classList.contains('popup_active')) {
      closePopup(evt.target);
    }
  });
});



//оверлей 
/*const overleyClosePopups = (evt) => {
  if (evt.target.classList.contains('popup_active')) {
    closePopup(evt.target);
  };
};*/


//закрытие  Esc
const closeWithEsc = (evt) => {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_active');
    closePopup(popup);
  };
};

/*function overleyClosePopups(popup) {
  popup.addEventListener("click", (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup();
}
});
}*/



/*открытие попапа редактирования*/
/*спросить у наставника логику*/
popupOpenEditBtn.addEventListener("click", function () {
  nameInput.value = nameProfile.textContent;
  descriptionInput.value = descriptionProfile.textContent;
  openPopup(popupEdit);

});



/*сохранение данных попапа редактирования по кнопке 'Сохранить'*/
popupEditForm.addEventListener("submit", (event) => {
  event.preventDefault();
  closePopup(popupEdit);
  nameProfile.textContent = nameInput.value;
  descriptionProfile.textContent = descriptionInput.value;
  
});

/*карточки*/
initialCards.forEach((elementPlace) =>
  renderCard(cardsContainer, createCard(elementPlace.name, elementPlace.link))
);

function renderCard (cardsContainer, elementPlace){
  cardsContainer.prepend(elementPlace);
};

function createCard(name, link) {
  const elementPlace = elementTemplate.querySelector(".elements__card").cloneNode(true);
  const elementCardTitle = elementPlace.querySelector(".elements__text");
  elementCardTitle.textContent = name;
  const elementCardImg = elementPlace.querySelector(".elements__image");
  elementCardImg.src = link;
  elementCardImg.alt = name;

  /*кнопка Корзина*/
  /*const deleteButton = elementPlace.querySelector(".elements__remove-button");
  deleteButton.addEventListener("click", (evt) => {
    elementPlace.remove();
  });*/

  const deleteButton = elementPlace.querySelector(".elements__remove-button");
  const trash = (evt) => {
    elementPlace.remove();
  }

  deleteButton.addEventListener('click', trash)


  /*лайк*/
 
  const likeButton = elementPlace.querySelector(".elements__like-button");
  const toggleLike = (evt) => { 
    evt.target.classList.toggle("elements__like-button_active"); 
   }; 
 
   likeButton.addEventListener('click', toggleLike)

 /* 

 const likeButton = elementPlace.querySelector(".elements__like-button"); 

 likeButton.addEventListener("click", (evt) => { 

   evt.target.classList.toggle("elements__like-button_active"); 

 }); */


  /*большая картинка*/
  elementCardImg.addEventListener("click", () => {
    
    fullCardImg.setAttribute("src", link);
    fullCardImg.setAttribute("alt", name);
    descriptionCardImg.textContent = name;
    openPopup(imgPopup);
  })

  return elementPlace;
};

/*открытие попапа создания карточки*/
popupAddBtn.addEventListener ("click", () => {
  openPopup(popupAdd);
});


/*сохранение данных попапа создания карточки по кнопке 'Создать'*/
popupAddForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newName = placeInput.value;
  const newLink = linkInput.value;
  renderCard(cardsContainer, createCard(newName, newLink));
  disabledButton({disabledButtonClass: 'popup__save-button_disabled'}, popupSaveButton);
  closePopup(popupAdd);
  evt.target.reset();
});
