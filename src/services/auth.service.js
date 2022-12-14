class AuthService {
  constructor(model) {
    this.model = model;
  }
  async signUpEmail(payload) {
    try {
      return await this.model.findOne({ email: payload.email });
    } catch (error) {
      console.log(error);
      throw createError(500);
    }
  }
  async validateCode(payload) {
    try {
      return await this.model.findOne({
        $and: [
          {
            email: payload.email,
          },
          {
            verification_code: payload.code,
          },
        ],
      });
    } catch (error) {
      console.log(error);
      throw createError(500);
    }
  }
  async signUp(payload) {
    payload.email = payload.email.toString().toLowerCase();
    let user = await this.model.findOne({
      email: payload.email,
    });

    if (user) {
      return "email_error";
    }
    user = await this.model.create(payload);
    var token = user.getJWTToken();
    user._doc["token"] = token;
    return user;
  }

  async verifyEmail(payload) {
    const user = await this.model.findOne({
      email: payload.email,
    });

    if (!user) {
      throw createError(400, messages.userNotFound);
    }
    return user;
  }

  async resendCode(id) {
    const user = await this.model.findOne({
      _id: id,
    });

    if (!user) {
      throw createError(400, messages.userNotFound);
    }

    if (user.isVerified) {
      throw createError(400, messages.alreadyVerified);
    }

    await libs.email_service.sendEmail(user);

    return user;
  }
}

exports.AuthService = AuthService;
