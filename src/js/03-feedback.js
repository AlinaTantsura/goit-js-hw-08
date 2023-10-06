import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const localS_key = "feedback-form-state";

const infoJson = localStorage.getItem(localS_key);
let infoObj = JSON.parse(infoJson) || {};
// let infoObj = {};
// if (infoJson) {
//     infoObj = JSON.parse(infoJson);
// }
console.log(`Email: ${infoObj.email}`);

form.elements.email.value = infoObj.email || "";
form.elements.message.value = infoObj.message || "";
form.addEventListener('input', throttle(handleInput, 500));
form.addEventListener('submit', handleSubmit);

function handleInput(event) {
    const obj = {};
    obj.email = event.currentTarget.email.value;
    obj.message = event.currentTarget.message.value;
    const infoToLocalStorage = JSON.stringify(obj);
    localStorage.setItem(localS_key, infoToLocalStorage)
    
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