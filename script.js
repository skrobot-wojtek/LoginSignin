const registrationBtn = document.getElementById('registration');
const container = document.getElementById('container');
const loginBtn = document.getElementById('login');

registrationBtn.addEventListener('click', () => {container.classList.add("active");
})
loginBtn.addEventListener('click', () => {container.classList.remove("active");
})
