# gulp-webdev-tasks
gulp tasks for all web development operations.

I wrote tasks for every operations I needed in web developemnt: compile scss files, transform js file from es6 in in es5, minify js and css files, generate index.html (for angularJs), move files to public folder, or send on ftp server with sftp protocol.

All you need is to adapt the config file (gulpfile.config.json) as you need. 

Each folder declared in configs array form gulpfile.config.json must contain a gulp-config.json with js and css files to include in index.html.

Dev-Watch-Es6 and Dev-Watch-Es5 has watcher for add/remove css, js files, and wqill generate automate hte index.html. However, it's possibile to get some error from gulp-watch while adding/remove files. In this situation you must close, wtahcer task, update manually golp-config.json files, an restart watcher task.

