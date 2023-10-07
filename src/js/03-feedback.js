import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const localS_key = "feedback-form-state";
const obj = {};
const infoObj = JSON.parse(localStorage.getItem(localS_key)) ?? {};

form.elements.email.value = infoObj.email ?? "";
form.elements.message.value = infoObj.message ?? "";
form.addEventListener('input', handleInput);
form.addEventListener('input', throttle(addApplication, 500));
form.addEventListener('submit', handleSubmit);

function handleInput(event) {
    obj.email = event.currentTarget.email.value;
    obj.message = event.currentTarget.message.value;
}
function addApplication(){
    const infoToLocalStorage = JSON.stringify(obj);
    localStorage.setItem(localS_key, infoToLocalStorage);
}
function handleSubmit(event) {
    event.preventDefault();
    if (!event.currentTarget.email.value || !event.currentTarget.message.value) {
        return;
    }
    console.log(JSON.parse(localStorage.getItem(localS_key)));
    localStorage.removeItem(localS_key);
    form.reset();
}
