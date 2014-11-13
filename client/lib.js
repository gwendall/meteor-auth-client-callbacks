Accounts._hooksLogin = Accounts._hooksLogin || [];
Accounts._hooksLogout = Accounts._hooksLogout || [];

Accounts.onLogin = function(cb) {
  if (!_.isFunction(cb)) return;
  Accounts._hooksLogin.push(cb);
}

Accounts.onLogout = function(cb) {
  if (!_.isFunction(cb)) return;
  Accounts._hooksLogout.push(cb);
}

Accounts._callHooksLogin = function() {
  var self = this;
  Accounts._hooksLogin.forEach(function(cb) {
    cb.apply(self);
  });
}

Accounts._callHooksLogout = function() {
  var self = this;
  Accounts._hooksLogout.forEach(function(cb) {
    cb.apply(self);
  });
}

Meteor.autorun(function() {
  if (Meteor.userId()) {
    Accounts._callHooksLogin();
  } else {
    Accounts._callHooksLogout();
  }
});
