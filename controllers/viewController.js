exports.home = async (req, res, next) => {
  res.status(200).render("index");
};

exports.about = async (req, res, next) => {
  res.status(200).render("about");
};

exports.services = async (req, res, next) => {
  res.status(200).render("services");
};

exports.team = async (req, res, next) => {
  res.status(200).render("team");
};

exports.portfolio = async (req, res, next) => {
  res.status(200).render("portfolio");
};

exports.contact = async (req, res, next) => {
  res.status(200).render("contact");
};

// exports.login = async (req, res, next) => {
//   res.status(200).render('login');
// };

