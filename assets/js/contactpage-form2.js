let submitButton = document.querySelector('#contact-submit-button');

function alertError(elemId, errorMsg) {
    document.getElementById(elemId).innerHTML = errorMsg;
}

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
        let regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(userName.value) === false) {
            alertError('nameError', 'Please, enter a valid name');
        } else {
            alertError('nameError', '');
            nameError = false;
        }
    }

    if(userEmail.value === '') {
        alertError('emailError', 'Please, enter your email');
    } else {
        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(regex.test(userEmail.value) === false) {
            alertError('emailError', 'Please, enter a valid email');
        } else {
            alertError('emailError', '');
            emailError = false;
        }
    }
    
    if((topicError || nameError || emailError) === true) {
        return false;
    } else {
        alert('Thank you for contacting us. We will get back to you shortly.');
    }
}

submitButton.addEventListener('click', validateForm);