const Controller = {
    init: function() {
      View.init();
      this.bindEventHandlers();
    },
    bindEventHandlers: function() {
      View.form.addEventListener('submit', function(event) {
        event.preventDefault();
        Controller.handleFormSubmit();
      });
    },
    handleFormSubmit: function() {
      View.clearMessages();
  
      const user = {
        name: View.nameInput.value,
        username: View.usernameInput.value,
        password: View.passwordInput.value,
        email: View.emailInput.value
      };
  
      if (Model.emailExists(user.email)) {
        View.showErrorMessage('This email is already registered. Please use a different email.');
      } else {
        Model.addUser(user);
        View.showSuccessMessage('Registration successful! Redirecting to login page...');
        setTimeout(() => {
          window.location.href = 'log.html';
        }, 2000);
      }
    }
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    Controller.init();
  });
  