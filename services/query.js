'use strict';
var parse = (params) => {
  let response = {
    limit: params.perPage || 20,
    offset: offset(params),
    where: where(params)
  };
  return response;
}
var offset = (params) => {
  console.log(params)
  return params.page ? ((params.page - 1) * (params.perPage || 20)) : 0; 
}
var where = (params) => {
  delete params.page;
  delete params.perPage;
  return params;
}
module.exports = parse;