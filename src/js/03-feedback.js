// import   _throttle  from 'lodash.throttle';



// const refs={
//     form: document.querySelector("form"),
//     email: document.querySelector("input"),
//     textarea: document.querySelector("textarea"),
// };
 
// refs.form.addEventListener("submit", handleFormSubmit);
// refs.email.addEventListener("input", handleEmailInput);
// refs.textarea.addEventListener("input", handleTextareaInput);

// formLoadSave();

// function handleFormSubmit(event) {
//     event.preventDefault();

//     console.log("Готово!!")

//     event.target.reset();
//     localStorage.removeItem("feedback-form-state");
// }


// function handleEmailInput(event) {
//     const valueEmail = event.target.value;
//     localStorage.setItem("feedback-form-state", valueEmail)
//     console.log(valueEmail);

//     l
// };


// function handleTextareaInput(event) {
//     const valueText = event.target.value;
//     localStorage.setItem("feedback-form-state", valueText);

//     console.log(valueText);
    
// };

// function formLoadSave() {
//     const saveTextForm = localStorage.getItem("feedback-form-state");

//     if(saveTextForm){
//       refs.email.value = saveTextForm;
//       refs.textarea.value = saveTextForm;
//     }
// }








const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
let formData ={};

form.addEventListener('submit', FormSubmit);
form.addEventListener('input', _throttle(onFormInput, 500));

formLoad();

function FormSubmit(event) {
  event.preventDefault();
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log("Отправили",savedData);
  
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function onFormInput(event) {
  formData[event.target.name]=event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

}

function formLoad() {
  const formLoad = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (!formLoad) { 
    return ;
  };
  form.email.value = formLoad.email || '';
  form.message.value = formLoad.message || '';
  formData.email =form.email.value ;
  formData.message =form.message.value ;   

}