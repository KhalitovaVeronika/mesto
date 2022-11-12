//показывает ошибку
const showInputError = (invalidInputClass, errorElement, inputElement) => {
    inputElement.classList.add(invalidInputClass.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(invalidInputClass.errorClass);
};


//прячет ошибку
const hideInputError = (invalidInputClass, errorElement, inputElement) => {
    inputElement.classList.remove(invalidInputClass.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(invalidInputClass.errorClass);
};


//кнопка неактивна
const disabledButton = (invalidInputClass, buttonElement) => {
    buttonElement.classList.add(invalidInputClass.disabledButtonClass);
    buttonElement.disabled = true;
};

//кнопка активна
const enableButton = (invalidInputClass, buttonElement) => {
    buttonElement.classList.remove(invalidInputClass.disabledButtonClass);
    buttonElement.disabled = false;
}

//переключатель кнопки
const toggleButtonState = (invalidInputClass, inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        disabledButton(invalidInputClass, buttonElement);
    } else {
        enableButton(invalidInputClass, buttonElement);
    };
};


//функция проверяет валидацию
const toggleInputErrorState = (invalidInputClass, formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.input-error-${inputElement.name}`);
    if(inputElement.validity.valid) {
        hideInputError(invalidInputClass, errorElement, inputElement);
    } else {
        showInputError(invalidInputClass, errorElement, inputElement, inputElement.validationMessage);
    };
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => !inputElement.validity.valid);
};

const setEventListeners = (invalidInputClass, formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(invalidInputClass.inputSelector));
    const buttonElement = formElement.querySelector(invalidInputClass.submitBtnSelector);
    toggleButtonState(invalidInputClass, inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
        toggleInputErrorState(invalidInputClass, formElement, inputElement);
        toggleButtonState(invalidInputClass, inputList, buttonElement);
      });
    });
};

const enableValidation = (invalidInputClass) => {
    const formList = Array.from(document.querySelectorAll(invalidInputClass.formSelector));
    
    formList.forEach((formElement) => {
        setEventListeners(invalidInputClass, formElement);
    });
};



enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__text',
    submitBtnSelector: '.popup__save-button',
    disabledButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__text_error',
    errorClass: 'popup__error_visible',
});