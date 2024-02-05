document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.querySelector('form');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const userEmail = document.getElementById('user').value;
    const userPassword = document.getElementById('password').value;

    if (userEmail && userPassword) {
      alert('Login successful!');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  });
});
