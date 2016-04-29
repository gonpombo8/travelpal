module.exports = function (app) {
  app.use('/api/histories', require('./histories'));
  app.use('/api/persons', require('./persons'));
  app.use('/api/cities', require('./cities'));
  app.use('/api/pictures', require('./pictures'));
}