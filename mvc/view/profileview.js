const View = {
    init: function() {
      this.form = document.getElementById('profile-form');
      this.nameInput = document.getElementById('name');
      this.loginInput = document.getElementById('login');
      this.passwordInput = document.getElementById('password');
      this.emailInput = document.getElementById('email');
      this.successMessage = document.getElementById('success-message');
      this.profileDataDiv = document.getElementById('profile-data');
      this.displayName = document.getElementById('display-name');
      this.displayLogin = document.getElementById('display-login');
      this.displayEmail = document.getElementById('display-email');
      this.render();
    },
    render: function() {
      const profileData = Controller.getProfileData();
      if (profileData) {
        this.nameInput.value = profileData.name || '';
        this.loginInput.value = profileData.login || '';
        this.passwordInput.value = profileData.password || '';
        this.emailInput.value = profileData.email || '';
        this.displayName.innerText = profileData.name || '';
        this.displayLogin.innerText = profileData.login || '';
        this.displayEmail.innerText = profileData.email || '';
      }
    },
    showSuccessMessage: function() {
      this.successMessage.style.display = 'block';
      this.successMessage.textContent = 'Profile data successfully updated!';
    },
    showProfileData: function() {
      this.profileDataDiv.style.display = 'block';
    }
  };
  