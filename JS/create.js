const signUpButton = document.getElementById('sign-up');
const name = document.getElementById('first-name');

signUpButton.addEventListener('click', () => {
  alert(`Thank you for signing up, ${name.value}!`);
  window.location.href = "index.html";
});