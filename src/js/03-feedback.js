import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');

const formData = {};

onCheckLocalStorage();

formEl.addEventListener('input', throttle(onChangeInput, 500));
formEl.addEventListener('submit', onSubmitForm);

function onChangeInput({ target }) {
  const { value } = target;

  formData[target.name] = value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(event) {
  event.preventDefault();

  const emailInput = formEl.elements.email;
  const messageInput = formEl.elements.message;

  if (!emailInput.value || !messageInput.value) {
    alert('Заповніть усі поля');

    return;
  }

  formEl.reset();

  localStorage.removeItem(STORAGE_KEY);

  onCheckLocalStorage();

  console.log(formData);
}

function onCheckLocalStorage() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(savedData);

  if (savedData) {
    formEl.elements.email.value = parsedData.email || '';
    formEl.elements.message.value = parsedData.message || '';
  }
}
