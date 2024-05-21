const Controller = {
    init: function() {
      View.init();
      this.bindEventHandlers();
    },
    bindEventHandlers: function() {
      View.form.addEventListener('submit', function(event) {
        event.preventDefault();
        Controller.updateProfileData({
          name: View.nameInput.value,
          login: View.loginInput.value,
          password: View.passwordInput.value,
          email: View.emailInput.value
        });
      });
    },
    getProfileData: function() {
      return Model.getProfileData();
    },
    updateProfileData: function(data) {
      Model.setProfileData(data);
      View.render();
      View.showSuccessMessage();
      View.showProfileData();
    }
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    Controller.init();
  });
  