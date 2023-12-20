var admin = require("firebase-admin");

var serviceAccount = require("../../codelearnhub-js.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export default admin