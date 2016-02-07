var base58 = require('base58');
var flickrapi = require('flickrapi');
var flickrOptions = {
      api_key: 'b34f544f7b8487cd7e2b1a6299832599',
      secret: 'e9035854d3cf3f93'
};
var flickr;

try {
    flickrapi.tokenOnly(flickrOptions, function(error, api) {
        if (!error) {
            flickr = api;
        }
    });
} catch(err) {
    console.log('flickr api error ', err);
}

exports.gitLinksToImg = function(req, res) {
    if (flickr) {
        flickr.photos.getSizes({
            photo_id: base58.decode(req.query.id)
        }, function(err, result) {
            if (result) {
                res.json(result);
            } else {
                res.statusCode(404);
            }
        });
    }
};
