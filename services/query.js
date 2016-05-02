'use strict';
var parse = (params) => {
  let response = {where: {}, limit: 20};
  for(var i in params) {
    if(Array.isArray(params[i])) {
      response.where[i] = {$in: params[i]};
    } else if(i === "page") {
      response.offset = (params[i] - 1) * 20;
    } else {
      response.where[i] = params[i];
    }
  }
  return response;
}
module.exports = parse;