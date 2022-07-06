const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  //console.log("Cookie controller runs")
  res.cookie('ssid', res.locals.user.id, { httpOnly: true });
  return next();
}

module.exports = cookieController;