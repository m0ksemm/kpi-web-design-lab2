

const Model = {
    getUsers: function() {
      const users = JSON.parse(localStorage.getItem('users'));
      return users ? users : [];
    },
    addUser: function(user) {
      const users = this.getUsers();
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
    },
    emailExists: function(email) {
      const users = this.getUsers();
      return users.some(user => user.email === email);
    }
  };
  