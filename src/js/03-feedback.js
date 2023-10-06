import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const localS_key = "feedback-form-state";
const obj = {};
const infoJson = localStorage.getItem(localS_key);

const infoObj = JSON.parse(infoJson) ?? {};

form.elements.email.value = infoObj.email ?? "";
form.elements.message.value = infoObj.message ?? "";
form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

function handleInput(event) {
    obj.email = event.currentTarget.email.value;
    obj.message = event.currentTarget.message.value;
    const infoToLocalStorage = JSON.stringify(obj);
    localStorage.setItem(localS_key, infoToLocalStorage);
}
function handleSubmit(event) {
    event.preventDefault();
    if (!event.currentTarget.email.value || !event.currentTarget.message.value) {
        return;
    }
    console.log(infoObj);
    localStorage.removeItem(localS_key);
    form.reset();
}
