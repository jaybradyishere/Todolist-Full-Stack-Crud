export const logger = (req, res, next) => {
  console.log(`${req.method} ${res.url}`);
  next();
};
