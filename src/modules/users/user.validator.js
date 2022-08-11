const { body } = expressValidator;
const { isEmail } = validator;

const payloadValidation = [
  body("size").notEmpty().withMessage("Please provide size."),
  body("email")
    .notEmpty()
    .withMessage(messages.notEmptyParam("Email"))
    .custom((value) => isEmail(value, { domain_specific_validation: true }))
    .withMessage(messages.invalidFormat("email")),
];

module.exports = {
  payloadValidation,
};
