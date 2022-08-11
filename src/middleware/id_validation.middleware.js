exports.validateId = (req, res, next) => {
  const { id } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)){
    utils.response.response(res, messages.invalidId, false, 200, null)
  }
  else{
    next();
  }
};
exports.validateIdGetRequest = (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)){
    utils.response.response(res, messages.invalidId, false, 200, null)
  }
  else{
    next();
  }
};
