# gulp-webdev-tasks
gulp tasks for all web development operations.

I wrote tasks for every operations I needed in web development: compile scss files, transpile js file from es6 in in es5, uglify js files minify js and css files, concatened css and js files, generate index.html (for angularJs), move files to public folder, or send on ftp server with sftp protocol.

All you need is to adapt the config file (gulpfile.config.json) as you need. 

Each folder declared in configs array from gulpfile.config.json must contain a gulp-config.json with js and css files to include in index.html.

Dev-Watch-Es6 and Dev-Watch-Es5 tasks has watchers for add/remove css, js files, and will generate the index.html instantly. However, it's possibile to get some error from gulp-watch while adding/remove files. In this situation you must close watcher task, update manually gulp-config.json files, an restart watcher task (or just reload, for refreshing content of gulp-config.json). Same must do when you update gulp-config.json manually (reload watcher Dev-Watch task).
If you experience some problems, and the files from public folder, is as it's must, you cand run Dev-Copy task, which will empty folder, and copy all the files coresponded from gulp-config.json files. Then you cand restart Dev-watch task.

For deploy, is enough to run Publish All task, which will do operations: compile scss files and copy in prepare folder, transpile js files and copy to prepare folder, copy all other files to prepare folder, minify, uglify, concatenate js and css files and copy to final public folder, generate index.html file, generate one concatenate licence for all MIT plugin, copy rest files (html, images, fonts) to public folder.
