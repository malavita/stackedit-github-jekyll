define([], function() {
	var constants = {};
	constants.VERSION = "4.3.12";
	constants.MAIN_URL = "https://malavita.herokuapp.com/";
	constants.GOOGLE_ANALYTICS_ACCOUNT_ID = "UA-53426549-2";
	constants.GOOGLE_API_KEY = "eUomTIN9mvBPAVA3bUtpF85S";
	constants.GOOGLE_DRIVE_APP_ID = "241271498917";
	constants.DROPBOX_APP_KEY = "lq6mwopab8wskas";
	constants.DROPBOX_APP_SECRET = "851fgnucpezy84t";
	constants.DROPBOX_RESTRICTED_APP_KEY = "sw0hlixhr8q1xk0";
	constants.DROPBOX_RESTRICTED_APP_SECRET = "1r808p2xygs6lbg";
	constants.BITLY_ACCESS_TOKEN = "317e033bfd48cf31155a68a536b1860013b09c4c";
	constants.DEFAULT_FILE_TITLE = "Title";
	constants.DEFAULT_FOLDER_NAME = "New folder";
	constants.GDRIVE_DEFAULT_FILE_TITLE = "New Markdown document";
	constants.EDITOR_DEFAULT_PADDING = 35;
	constants.CHECK_ONLINE_PERIOD = 120000;
	constants.AJAX_TIMEOUT = 30000;
	constants.ASYNC_TASK_DEFAULT_TIMEOUT = 60000;
	constants.ASYNC_TASK_LONG_TIMEOUT = 180000;
	constants.USER_IDLE_THRESHOLD = 300000;
	constants.IMPORT_FILE_MAX_CONTENT_SIZE = 100000;
	constants.IMPORT_IMG_MAX_CONTENT_SIZE = 10000000;
	constants.COUCHDB_PAGE_SIZE = 25;
	constants.TEMPORARY_FILE_INDEX = "file.tempIndex";
	constants.WELCOME_DOCUMENT_TITLE = "Hello!";
	constants.DOWNLOAD_IMPORT_URL = "/downloadImport";
	constants.PICASA_IMPORT_IMG_URL = "/picasaImportImg";
	constants.FLICKR_IMPORT_IMG_URL = "/flickrUrl";
	constants.SSH_PUBLISH_URL = '/sshPublish';
	constants.PDF_EXPORT_URL = "/pdfExport";
	constants.COUCHDB_URL = 'https://stackedit.smileupps.com/documents';

	// Site dependent
	constants.BASE_URL = "http://localhost/";
	constants.GOOGLE_CLIENT_ID = '382949310060-6ngthlje44340tromolftsps0aooh0os.apps.googleusercontent.com';
	constants.GITHUB_CLIENT_ID = '65d19c6d9be61273c7c9';
	// constants.GATEKEEPER_URL = "https://stackedit-gatekeeper-localhost.herokuapp.com/";
	constants.TUMBLR_PROXY_URL = "https://stackedit-tumblr-proxy-local.herokuapp.com/";
	constants.WORDPRESS_CLIENT_ID = '23361';
	constants.WORDPRESS_PROXY_URL = "https://stackedit-io-wordpress-proxy.herokuapp.com/";

	if(location.hostname.indexOf("localhost") === 0) {
		constants.GOOGLE_CLIENT_ID = '382949310060-6ngthlje44340tromolftsps0aooh0os.apps.googleusercontent.com';
		constants.GITHUB_CLIENT_ID = 'a5f8aac09510c8db11b7';
		constants.GATEKEEPER_URL = "https://malavita-localhost-gatekeeper.herokuapp.com/";
	}
	if(location.hostname.indexOf("malavita.herokuapp.com") === 0) {
		constants.GITHUB_CLIENT_ID = '65d19c6d9be61273c7c9';
		constants.BASE_URL = 'malavita.herokuapp.com';
		constants.GOOGLE_CLIENT_ID = '382949310060-6ngthlje44340tromolftsps0aooh0os.apps.googleusercontent.com';
		constants.GATEKEEPER_URL = "https://malavita-localhost-gatekeeper.herokuapp.com/";
	}

	constants.THEME_LIST = {
		"blue": "Blue",
		"default": "Default",
		"gray": "Gray",
		"night": "Night",
		"school": "School",
		"solarized-light": "Solarized Light",
		"solarized-dark": "Solarized Dark"
	};

	return constants;
});
