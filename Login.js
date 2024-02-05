document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.querySelector('form');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get user input
    const userEmail = document.getElementById('user').value;
    const userPassword = document.getElementById('password').value;

    // Perform basic validation (you should implement proper validation and authentication logic)
    if (userEmail && userPassword) {
      alert(`Login successful!\nEmail: ${userEmail}\nPassword: ${userPassword}`);
      // Here you can redirect or perform other actions upon successful login
    } else {
      alert('Invalid email or password. Please try again.');
    }
  });
});
