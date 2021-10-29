// TRY CATCH GLOBAL ERROR HANDLING

module.exports = (func) => (req, res, next) =>
  Promise.resolve(fun(req, res, next)).catch(next);
