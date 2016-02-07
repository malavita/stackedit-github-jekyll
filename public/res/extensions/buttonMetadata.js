define([
    "jquery",
    "underscore",
    "crel",
    "utils",
    "classes/Extension",
    "text!html/dialogMetadata.html"
], function($, _, crel, utils, Extension, dialogMetadataHTML) {

    var buttonMetadata = new Extension("buttonMetadata", 'Button "Metadata"', false, true);
    var $button;
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
			$(".modal-metadata-dialog").modal();
        });
        return button;
    };

    buttonMetadata.onFileOpen = function(fileDesc) {
        var metadata = fileDesc.post_metadata;
        if (!metadata) {
            $button.addClass("disabled");
        } else {
            $button.removeClass("disabled");
            $(".modal-metadata-dialog").remove();
            utils.addModal('modal-metadata-dialog', _.template(dialogMetadataHTML, metadata));
        }
	};

    return buttonMetadata;

});
