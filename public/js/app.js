const openBtn = document.querySelector('.open');

const closeBtn = document.querySelector('.close');

const nav = document.querySelector('.mobile-nav .navBar');

const dark = document.querySelector('.darken');

openBtn.addEventListener('click', (e) => {
  nav.classList.remove('hide');
  dark.classList.remove('hide');
});

closeBtn.addEventListener('click', (e) => {
  nav.classList.add('hide');
  dark.classList.add('hide');
});

// Validation

const form = document.querySelector('.signUp');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputs = form.querySelectorAll('input[type=text]');
  let allInputsValid = true;
  inputs.forEach((input) => {
    const error = input.parentElement.querySelector('.error');
    if (!validate(input).isValid) {
      allInputsValid = false;
      error.textContent = validate(input).message;
      error.classList.remove('hide');
    } else {
      allInputsValid = true;
      error.classList.add('hide');
    }
  });

  if (allInputsValid) {
    const formData = new FormData(form);
    let data = {};
    for (let pair of formData.entries()) {
      console.log(pair);
      console.log(pair[0] + ':' + pair[1]);
      data[pair[0]] = pair[1];
    }

    console.log(data);
    fetch('/', {
        redirect: 'follow',
        method: 'post',
        body: data, // post body
      })
});

const validate = (element) => {
  const respone = {
    isValid: false,
    message: '',
  };

  const regEx = /^[a-zA-Z]{1,20},[a-zA-Z]{1,20}$/;

  const email = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g;

  if (!element.value.length) {
    respone.message = 'Please Input A Value';
  } else if (!email.test(element.value) && element.id === 'userEmail') {
    respone.message = 'Please enter a valid email';
  } else if (
    !regEx.test(element.value) &&
    element.classList.contains('userLocation')
  ) {
    respone.message = 'Please enter a valid city and state';
  } else {
    respone.isValid = true;
  }

  return respone;
};
