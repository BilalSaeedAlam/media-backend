module.exports = {
  generalError: "Something went wrong.",
  invalidLogin: "Invalid email or password",
  InvalidToken: "Invalid token.",
  created: (name) => {
    return `${name} has been created successfully!`;
  },
  signedIn: "You have been signed in successfully",
  updatedModel: (model) => {
    return `${model} has updated successfully!`;
  },
  invalidPayload: "Invalid payload",
  userNotFound: "Couldn't find your Account",
  success: "Success!",
  notFound: (model) => {
    return `${model} does not exist!`;
  },
  verified: "Email verified successfully",
  notVerified: "Email address not verified",
  invalidCode: "Invalid code entered, please try again.",
  alreadyVerified: "Your Email is already verified",
  resendCode: "verification code has been sent to you again",
  SocialSignInMessage: (provider) => {
    return `You have been signed In successfully using ${provider}`;
  },
  SocialSignUpMessage: (provider) => {
    return `You have been registered successfully using ${provider}`;
  },
  badRequest: "Bad request",
  notPresent: "Not present in the payload",
  invalidFormat: (service) => {
    return `Invalid ${service} Format`;
  },
  invalidLength: "Invalid Length!",
  notEmpty: "This field must not be empty!",
  invalidDataType: (val) => {
    return `Please provide valid ${val}!`;
  },
  emailExists: "Email already exists!",
  sessionExpiry: "Session has been expired!",
  updateAttr: (attr) => {
    return `${attr} has been updated successfully!`;
  },
  codeExpired: "Your code has expired.",
  invalidEmail: "invalid email",
  invalidEmailOrPassword: "invalid email or password",
  invalidId: "Invalid Id!",
  invalidQuery: (param) => {
    return `Query param ${param} cannot be empty`;
  },
  weakPassword:
    "Invalid password, please use atleast one uppercase ( A-Z), one digit ( 0-9) and one character.",
  userExists: (param) => {
    return `Another user with this ${param} already exists.`;
  },
  alreadyInvited: "You have already been invited",
  notEmptyParam: (param) => {
    return `${param} field must not be empty`;
  },
};
