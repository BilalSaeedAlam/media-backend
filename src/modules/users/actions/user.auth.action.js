const usersCrudService = new services.CrudService(models.Users);

exports.auth = {
  subscribe: async (req, res, next) => {
    const { body: payload } = req;
    console.log(payload);
    try {
      let data = await usersCrudService.getDocumentByEmail(payload);
      if (!data || data === null) {
        payload.email = payload.email.toString().toLowerCase();
        let user = await usersCrudService.add(payload);
        if (user) {
          let info = await libs.email_service.sendEmail(payload.email);
          if (info.messageId) {
            return utils.response.response(res, "Email sent", true, 200, user);
          } else {
            return utils.response.response(
              res,
              "Email not sent.",
              false,
              200,
              {}
            );
          }
        }
      } else {
        return utils.response.response(
          res,
          "You have been already subscribed.",
          false,
          200,
          {}
        );
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  },
};
