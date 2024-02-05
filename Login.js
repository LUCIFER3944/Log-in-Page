function login() {
    var username = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    // Basic validation, you should implement proper authentication logic here
    if (username === "user@gmail.com" && password === "lol") {
      alert("Login successful!");
    } else {
      alert("Invalid username or password. Please try again.");
    }
  }