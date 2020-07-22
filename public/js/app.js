const openBtn = document.querySelector('.open');

const closeBtn = document.querySelector('.close');

const nav = document.querySelector('.mobile-nav .navBar');

const dark = document.querySelector('.darken');

const successBtn = document.querySelector('.success-button');

const success = document.querySelector('.success-overlay');

openBtn.addEventListener('click', (e) => {
	nav.classList.remove('hide');
	dark.classList.remove('hide');
});

closeBtn.addEventListener('click', (e) => {
	nav.classList.add('hide');
	dark.classList.add('hide');
});

if (success) {
	successBtn.addEventListener('click', (e) => {
		success.classList.add('hide');
	});
}

// Validation

const form = document.querySelector('.signUp');

form.addEventListener('submit', (e) => {
	const inputs = form.querySelectorAll('input[type=text]');
	let allInputsValid = true;
	inputs.forEach((input) => {
		const error = input.parentElement.querySelector('.error');
		if (!validate(input).isValid) {
			allInputsValid = false;
			error.textContent = validate(input).message;
			error.classList.remove('hide');
			input.style.border = '1px solid red';
			e.preventDefault();
		} else {
			allInputsValid = true;
			error.classList.add('hide');
		}
	});
});

const validate = (element) => {
	const respone = {
		isValid: false,
		message: '',
	};

	const email = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g;

	if (!element.value.length) {
		respone.message = 'Please Input A Value';
	} else if (!email.test(element.value) && element.id === 'userEmail') {
		respone.message = 'Please enter a valid email';
	} else {
		respone.isValid = true;
	}

	return respone;
};
