
let formData = {
    email: "",
    message: ""
};
const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name="email"]');
const messageInput = document.querySelector('[name="message"]');

const localStorageKey = 'feedback-form-state';
const savedData = localStorage.getItem(localStorageKey);
if (savedData) {
    try {
        formData = JSON.parse(savedData);
        emailInput.value = formData.email || "";
        messageInput.value = formData.message || "";
    } catch (error) {
        console.log(error.message);
    }
}

feedbackForm.addEventListener('input', function (event) {
    if (event.target.name === "email" || event.target.name === "message") {
        formData[event.target.name] = event.target.value.trim();
        localStorage.setItem(localStorageKey, JSON.stringify(formData));
    }
});

feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (formData.email === '' || formData.message === '') {
        alert('Fill please all fields');
            return;
    }
    console.log(formData);

localStorage.removeItem(localStorageKey); 
    formData = {
        email: "",
        message: ""
    };
  feedbackForm.reset(); 
});

