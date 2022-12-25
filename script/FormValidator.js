//ООП

class FormValidator {
    constructor (formElement, data) {
        this._formElement = formElement;

        this._formSelector = data.formSelector;
        this._inputSelector = data.inputSelector;
        this._popupSaveButton = data.popupSaveButton;
        this._disabledButtonClass = data.disabledButtonClass;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;     

        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement.querySelector(this._popupSaveButton);
       // this._errorElement = this._formElement.querySelector(`.input-error-${inputElement.name}`);


       this._popupForm = this._popup.querySelector('.popup__form');
       this._inputList = this._popupForm.querySelectorAll('.popup__text')
       this._popupFullPhoto = document.querySelector(".popup__full-photo");
        this._popupFullPhotoDescription = document.querySelector(".popup__full-photo-description");
    }


//показывает ошибку
_showInputError (inputElement) {
    this._errorElement = this._formElement.querySelector(`.input-error-${inputElement.name}`);
    inputElement.classList.add(this.inputErrorClass);
    this._errorElement.textContent = inputElement.validationMessage;
    this._errorElement.classList.add(this.errorClass);
    //&&&
};


//прячет ошибку
_hideInputError (inputElement) {
    this._errorElement = this._formElement.querySelector(`.input-error-${inputElement.name}`);
    inputElement.classList.remove(this.inputErrorClass);
    this._errorElement.textContent = '';
    this._errorElement.classList.remove(this.errorClass);
};


//кнопка неактивна
disabledButton () {
    this._buttonElement.classList.add(this._disabledButtonClass);
    this.buttonElement.disabled = true;
};

//кнопка активна
enableButton () {
    this.buttonElement.classList.remove(this._disabledButtonClass);
    buttonElement.disabled = false;
}

//переключатель кнопки
_toggleButtonState  () {
    if (this.hasInvalidInput(this.inputList)) {
        this.disabledButton();
    } else {
        this.enableButton();
    };
};


//функция проверяет валидацию
_toggleInputErrorState (inputElement) {
    //const errorElement = formElement.querySelector(`.input-error-${inputElement.name}`);
    if(inputElement.validity.valid) {
        this._hideInputError(inputElement);
    } else {
        this._showInputError(iinputElement, inputElement.validationMessage);
    };
};

 hasInvalidInput () {
    return this.inputList.some((inputElement) => !inputElement.validity.valid);
};

_setEventListeners () {
    //const inputList = Array.from(formElement.querySelectorAll(invalidInputClass.inputSelector));
   // const buttonElement = formElement.querySelector(invalidInputClass.popupSaveButton);
    this._toggleButtonState();
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
        this._toggleInputErrorState(inputElement);
        this._toggleButtonState();
      });
    });
};

//const enableValidation = (invalidInputClass) => {
//    const formList = Array.from(document.querySelectorAll(invalidInputClass.formSelector));
    
//    formList.forEach((formElement) => {
//        setEventListeners(invalidInputClass, formElement);
//    });
//};

resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
        this._hideInputError(inputElement);
    });

    this._formElement.addEventListener('submit', () => {
        if (this._hasInvalidInput()) {
          this.disabledButton();
        }
      });
};

enableValidation () {
    this._setEventListeners();
    this.resetValidation();
};

//enableValidation({
//    formSelector: '.popup__form',
//    inputSelector: '.popup__text',
//    popupSaveButton: '.popup__save-button',
//    disabledButtonClass: 'popup__save-button_disabled',
//    inputErrorClass: 'popup__text_error',
//    errorClass: 'popup__error_visible',
//})
}
export { FormValidator }