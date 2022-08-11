module.exports.sendNotification = async(data, notification, tokens) => {
    // data is json format object
    // notification is object that title and body key
    const message = {
        data,
        notification,
        tokens
    };
    return firebase.notificationConfig.messaging().sendMulticast(message)
}