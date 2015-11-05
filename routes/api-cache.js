// Return either cached api content or make a new request

var returnApiContent = module.exports = function(query) {

	var requestTime = new Date();

	if(requestTime - app.locals.lastRequestTime > app.locals.apiCacheTimeout) { //If sufficient time has passed, make fresh api request
    console.log('new api call');
    app.locals.lastRequestTime = requestTime;
    request(query, function(error, response, body) {
      //add returned data to cache then return data
      app.locals.apiCache[query] = body;
      res.send(body);
    });
  } else {
    //check for cached version first
    if(app.locals.apiCache.hasOwnProperty(query) && app.locals.apiCache[query].length){
      console.log('cached api call');
      res.send(app.locals.apiCache[query]);
    } else {
      request(query, function(error, response, body) {
        //add returned data to cache then return data
        console.log('no cache - new api call');
        app.locals.apiCache[query] = body;
        res.send(body);
      });
    }
  }
};