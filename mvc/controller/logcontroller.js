const LoginController = {
    init: function() {
      LoginView.init();
      this.bindEventHandlers();
    },
    bindEventHandlers: function() {
      LoginView.form.addEventListener('submit', function(event) {
        event.preventDefault();
        LoginController.handleFormSubmit();
      });
    },
    handleFormSubmit: function() {
      LoginView.clearMessages();
      
      const username = LoginView.usernameInput.value;
      const password = LoginView.passwordInput.value;
      
      const user = Model.getUserByUsername(username);
      
      if (!user) {
        LoginView.showErrorMessage('User not found. Please check your username.');
      } else if (user.password !== password) {
        LoginView.showErrorMessage('Incorrect password. Please try again.');
      } else {
        LoginView.showSuccessMessage('Login successful! Redirecting to profile...');
        setTimeout(() => {
          window.location.href = 'prof.html'; 
        }, 2000);
      }
    }
};

document.addEventListener('DOMContentLoaded', function() {
  LoginController.init();
});
