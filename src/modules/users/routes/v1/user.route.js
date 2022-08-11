router.post(
  "/auth/subscribe",
  validators.users.payloadValidation,
  middlewares.validation.request,
  actions.users.auth.subscribe
);

module.exports = { prefix: "users", router };
