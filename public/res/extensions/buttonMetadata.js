define([
    "jquery",
    "underscore",
    "crel",
    "utils",
    "classes/Extension",
    "require",
    "text!html/dialogMetadata.html"
], function($, _, crel, utils, Extension, require, dialogMetadataHTML) {

    var buttonMetadata = new Extension("buttonMetadata", 'Button "Metadata"', false, true);
    var $button;
    var metadata;
    var isOffline = false;

    buttonMetadata.onCreateButton = function() {
        var button = crel('a', {
            class: 'btn btn-success button-metadata',
            title: 'Open metadata dialog'
        }, crel('i', {
            class: 'icon-tasks'
        }));
        $button = $(button);
        $button.click(function() {
            // invoke dialog
            $(".modal-metadata-dialog").remove();
            utils.addModal('modal-metadata-dialog', _.template(dialogMetadataHTML, {
                metadata: metadata
            }));
            $(".action-metadata-update").on('click', clickHandler);
			$(".modal-metadata-dialog").modal();
        });

        return button;
    };

    buttonMetadata.onFileOpen = function(fileDesc) {
        metadata = fileDesc.post_metadata;
        if (!metadata) {
            $button.addClass("disabled");
        } else {
            $button.removeClass("disabled");
        }
	};

    buttonMetadata.onTitleChanged = function(fileDesc) {
        fileDesc.post_metadata = _.extend(metadata, {
            title: fileDesc.title
        });
    };

    function clickHandler() {
        var fileMgr = require('fileMgr');
        var inputEls = $(".modal-metadata-dialog")[0].getElementsByTagName('input');
        var newMetadata = Array.prototype.reduce.call(inputEls, function(result, el) {
            result[el.name] = el.value;
            return result;
        }, {});
        fileMgr.currentFile.post_metadata = _.extend(metadata, newMetadata);
    }

    return buttonMetadata;

});
