define([
    "jquery",
    "underscore",
    "constants",
    "utils",
    "classes/Extension"
], function($, _, constants, utils, Extension) {

    var flickrUrls = new Extension("flickrUrls", "FlickrUrls", false, true);

    var isOffline = false;

    flickrUrls.onInsertImage = function(callback, link, options) {
        var flickrUrl;
        var imageId;
        // check wether link contains short flickr url
        if (!isOffline && link && (link.indexOf('flic.kr') >=0)) {
            flickrUrl = link.split(' ')[0];
            imageId = flickrUrl.split('/').pop();
            $.ajax({
                url: constants.FLICKR_IMPORT_IMG_URL + '?' + $.param({
                    id: imageId
                }),
                timeout: constants.AJAX_TIMEOUT,
                type: "GET"
            }).done(function(data) {
                // TODO: custom dialog for flickr images(sizes)
                var imageLink = _.result(_.findWhere(data.sizes.size, {label: 'Large'}), 'source');
                callback(imageLink, options);
            }).fail(function(jqXHR) {
                var error = {
                    code: jqXHR.status,
                    message: jqXHR.statusText
                };
                // TODO: push notification
                console.log(error);
            });
        } else {
            callback(link, options);
        }
    };

    flickrUrls.onOfflineChanged = function(isOfflineParam) {
        isOffline = isOfflineParam;
    };

    return flickrUrls;
});
