function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  if (email && password) {
  
    let users = JSON.parse(localStorage.getItem('users')) || {};

    users[email] = password; // In a real app, hash the password

    localStorage.setItem('users', JSON.stringify(users));

    alert('Sign Up Successful');
    location.href = 'signin.html';
  } else {
    alert('All fields are required');
  }
}

function login() {
  const email = document.getElementById('lemail').value;
  const password = document.getElementById('lpassword').value;

  let users = JSON.parse(localStorage.getItem('users')) || {};

  if (users[email] === password) {
    alert('Sign In Successful');
    location.href="dashboard.html"
  } else {
    alert('Invalid credentials');
  }
}