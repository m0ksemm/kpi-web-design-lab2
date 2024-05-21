const LoginView = {
    init: function() {
      this.form = document.getElementById('login-form');
      this.usernameInput = document.getElementById('username');
      this.passwordInput = document.getElementById('password');
      this.errorMessage = document.getElementById('error-message');
      this.successMessage = document.getElementById('success-message');
    },
    clearMessages: function() {
      this.errorMessage.style.display = 'none';
      this.successMessage.style.display = 'none';
    },
    showErrorMessage: function(message) {
      this.errorMessage.style.display = 'block';
      this.errorMessage.textContent = message;
    },
    showSuccessMessage: function(message) {
      this.successMessage.style.display = 'block';
      this.successMessage.textContent = message;
    }
};
