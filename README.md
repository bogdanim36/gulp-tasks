# gulp-webdev-tasks
gulp tasks for all web development operations.

I wrote tasks for every operations I needed in web developemnt: compile scss files, transform js file from es6 in in es5, minify js and css files, generate index.html (for angularJs), move files to public folder, or send on ftp server with sftp protocol.

All you need is to adapt the config file (gulpfile.config.json) as you need.

{
  "path": {
    "src": "src/",
    "bowerLibs": [
      "components/bower-libs",
      "app-modules/bower-libs"
    ],
    "public": "wwwroot",
    "publishPrepare": "src-compiled"
  },
  "productionBase": "/",
  "tasks": [
    {
      "extension": ".css",
      "outputFileName": "site.min.css"
    },
    {
      "extension": ".js",
      "outputFileName": "head.min.js"
    },
    {
      "extension": ".js",
      "outputFileName": "body.min.js"
    }
  ],
  "babelPresets": [
    "es2015"
  ],
  "deployFtp": {
    "remotePlatformValues": [
      "unix",
      "windows"
    ],
    "devWatch1": "devWatchEs6",
    "profiles": {
      "devWatchEs6": {
        "type": "sftp",
        "host": "my-server",
        "port": "22",
        "remotePlatform": "unix",
        "user": "ftp-user",
        "pass": "------",
        "remotePath": "/web/"
      },
      "publish": {
        "type": "sftp",
        "host": "my-server",
        "port": "22",
        "remotePlatform": "unix",
        "user": "ftp-user",
        "pass": "----",
        "remotePath": "/web/public"
      }
    }
  },
  "productionCopy": [
    "src/app-modules/docs/**/*.js",
    "src/app-modules/demo-app/**/*.js"
  ],
  "favicon": "app-modules\\favicon.jpg",
  "fontsFileMasks": [
    "/components/bower-libs/font-awesome/fonts/*.*",
    "/components/bower-libs/bootstrap/fonts/*.*"
  ],
  "configs": {
    "components": {
      "path": "components"
    },
    "app-modules": {
      "path": "app-modules"
    }
  }
}
