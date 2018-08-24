var applicationInfo = {
	"name": "AjFramework",
	"version": "1.0.0",
};

if (typeof window === 'undefined') {
	module.exports = applicationInfo;
} else {
	document.title = applicationInfo.name + " " + applicationInfo.version;
}
