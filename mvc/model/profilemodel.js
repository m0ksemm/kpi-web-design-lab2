const Model = {
    getProfileData: function() {
      const profileData = JSON.parse(localStorage.getItem('profileData'));
      return profileData ? profileData : {};
    },
    setProfileData: function(data) {
      localStorage.setItem('profileData', JSON.stringify(data));
    }
  };