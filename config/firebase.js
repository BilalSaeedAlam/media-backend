module.exports = {
    notificationConfig: firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert(serviceAccount)
    })
}