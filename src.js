// Toggle between Sign In and Sign Up forms
function toggleForm() {
    const signInContainer = document.querySelector('.sign-in-container');
    const signUpContainer = document.querySelector('.sign-up-container');
  
    signInContainer.classList.toggle('hidden');
    signUpContainer.classList.toggle('hidden');
  }
  
  // Handle Sign In form submission
  document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
  
    if (email === "" || password === "") {
      alert("Please fill out all fields.");
    } else {
      // Dummy sign in logic (Replace with backend call)
      alert(`Signed in with email: ${email}`);
    }
  });
  
  // Handle Sign Up form submission
  document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
  
    if (name === "" || email === "" || password === "") {
      alert("Please fill out all fields.");
    } else {
      // Dummy sign up logic (Replace with backend call)
      alert(`Signed up with email: ${email}`);
    }
  });