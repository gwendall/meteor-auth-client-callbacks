Meteor Auth Client Callbacks
============================

Adds client-side onLogin and onLogout methods.  

Installation
------------

``` sh
meteor add gwendall:auth-client-callbacks
```

Methods
-------

**Accounts.onLogin(callback)**
Callback called something whenever the client logs in.
```javascript
Accounts.onLogin(function() {
  console.log("I am logged in.");
});
```

**Accounts.onLogout(callback)**
Callback called something whenever the client logs out.
```javascript
Accounts.onLogout(function() {
  console.log("I am logged out.");
});
```
