//Get elements: "send" button; modal window; close modal cross icon

let submitButton = document.querySelector('#contact-submit-button');
let modalPopup = document.querySelector('#modal');
let closeModal = document.querySelector('.close-modal'); 

//Error Message appears when form is filled in incorrectly
function alertError(elementId, errorMessage) {
    document.getElementById(elementId).innerHTML = errorMessage;
}

//Opens Modal window when whole form is filled in correctly
function openModal() {
    modalPopup.style.display = "block";
}

//Form validates 3 required items: topic, name and email (if left blank or filled in incorrectly). Message textarea is not required.
let validateForm = (e) => {
    e.preventDefault();
    let topic = document.querySelector('#contact-topic');
    let userName = document.querySelector('#contact-name');
    let userEmail = document.querySelector('#contact-email');

    let topicError = nameError = emailError = true;

    if(topic.value === 'Select') {
        alertError('topicError', 'Please, select one topic');
    } else {
        alertError('topicError', '');
        topicError = false;
    }

    if(userName.value === '') {
        alertError('nameError', 'Please, enter your name');
    } else {
        let nameValidation = /^[a-zA-Z\s]+$/;                
        if(nameValidation.test(userName.value) === false) {
            alertError('nameError', 'Please, enter a valid name');
        } else {
            alertError('nameError', '');
            nameError = false;
        }
    }

    if(userEmail.value === '') {
        alertError('emailError', 'Please, enter your email');
    } else {
        let emailValidation = /\S+@\S+\.\S+/;
        if(emailValidation.test(userEmail.value) === false) {
            alertError('emailError', 'Please, enter a valid email');
        } else {
            alertError('emailError', '');
            emailError = false;
        }
    }
    //If the 3 items are filled in correctly, form opens Modal window, which can be closed clicking in the cross icon
    if((topicError || nameError || emailError) === true) {
        return false;
    } else {
        openModal();
    }
    closeModal.onclick = function() {
        modalPopup.style.display = "none";
    }
}

submitButton.addEventListener('click', validateForm);