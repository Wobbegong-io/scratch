const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  //console.log("Cookie controller runs")
  res.cookie('ssid', res.locals.user.id, { httpOnly: true });
  return next();
}

cookieController.deleteSSIDCookie = (req, res, next) => {
  console.log("delete SSID controller runs")
  res.clearCookie('ssid');
  res.end();
  return next();
}

module.exports = cookieController;