
export class Card {
  constructor (name, link, templateSelector) {
    this._link = link;
    this._name = namr;
    this._templateSelector = templateSelector;
    
  }



  // метод добавление темплейт элемента+
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector (".elements__card")
      .cloneNode(true);
    return cardElement;
  }

  // /*лайк*/ 
  //кнопка лайк
  _likeButton = () => {
    this._element
      .querySelector(".elements__like-button")
      .classList.toggle("elements__like-button_active");
  };

  // удаление карточки +
  _deleteCard = () => {
    this._element.remove();
    this._element = null;
  };
//+
createCard() {
    this._element = this._getTemplate();
    // ищем картинку и лайк один раз, чтобы потом больше не искать
    this._elementCardImg = this._element.querySelector(".elements__image");
    this._elementLike = this._element.querySelector(".element__heart");

    // попап с картинкой
    this._elementCardImg.addEventListener("click", () => {
      openPopupImage(this._name, this._link);
    });

    //кнопка лайк
    this._elementLike.addEventListener("click", this._likeButton);

    //удаление карточки
    this._element
      .querySelector(".elements__remove-button")
      .addEventListener("click", this._deleteCard);

    // ссылка на картинку, alt и ссылка на текст в карточке
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._element.querySelector(".element__title").textContent = this._name;

    return this._element;
  }
}
