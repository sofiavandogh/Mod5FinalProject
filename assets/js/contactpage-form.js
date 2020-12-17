function alertError(elemId, errorMsg) {
    document.getElementById(elemId).innerHTML = errorMsg;
}

function validateFormItems() {
    let dropdown = document.querySelector('#contact-dropdown').value;
    let name = document.querySelector('#contact-name').value;
    let email = document.querySelector('#contact-email').value;
    
    let topicError = nameError = emailError = true;

    if(dropdown === 'Select') {
        alertError('topicError', 'Please, select one topic');
    } else {
        alertError('topicError', '');
        topicError = false;
    }

    if(name === '') {
        alertError('nameError', 'Please, enter your name');
    } else {
        let regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            alertError('nameError', 'Please, enter a valid name');
        } else {
            alertError('nameError', '');
            nameError = false;
        }
    }

    if(email === '') {
        alertError('emailError', 'Please, enter your email');
    } else {
        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(regex.test(email) == false) {
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
};








/* function validateFormItems(){
    let dropdown = document.querySelector("#contact-dropdown");
    let nameTextInput = nameText.value;
    if(nameTextInput === ''){
        alert("Please, enter your name.");
    }
    }


let button = document.querySelector("#contact-submit-button");

button.addEventListener("click",validarName); */

/* let text = document.querySelectorAll("input");
for(i=0; i< text.length ; ++i){
    text[i].addEventListener("input",mostraAlteracao);

} */
