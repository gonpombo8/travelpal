module.exports = function (app) {
  app.use('/api/histories', require('./histories.route'));
  app.use('/api/persons', require('./persons.route'));
  app.use('/api/cities', require('./cities.route'));
  app.use('/api/pictures', require('./pictures.route'));
}