Package.describe({
  name: "gwendall:auth-client-callbacks",
  summary: "Adds client-side onLogin and onLogout methods",
  version: "0.1.0"
});

Package.on_use(function (api, where) {

  api.use([
    "underscore@1.0.1",
    "accounts-base@1.1.2"
  ], "client");

  api.imply([
    "accounts-base"
  ], "client");

  api.add_files([
    "client/lib.js"
  ], "client");

});
