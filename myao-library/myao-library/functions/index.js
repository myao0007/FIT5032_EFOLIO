/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

/* eslint-env node */
/* global require, exports */
const { setGlobalOptions } = require('firebase-functions');
const { onRequest } = require('firebase-functions/v2/https');
// const logger = require('firebase-functions/logger'); 
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });   

admin.initializeApp();

// Simple function to capitalize book names
exports.capitalizeBook = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const { bookName } = req.body;
      const capitalizedName = bookName ? bookName.toUpperCase() : '';
      res.status(200).send({ capitalizedName });
    } catch (error) {
      console.error('Error capitalizing book name:', error);
      res.status(500).send('Error capitalizing book name');
    }
  });
});

exports.countBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const snapshot = await admin.firestore().collection('books').get();
      const count = snapshot.size;
      res.status(200).send({ count });
    } catch (error) {
      // logger：logger.error('Error counting books', error);
      console.error('Error counting books:', error.message);
      res.status(500).send('Error counting books');
    }
  });
});


// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({ maxInstances: 10 });

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
