---

A simple dashboard

## Getting Started

### Installation

First of all, install the dependencies to run this boilerplate.

- [NodeJS](http://nodejs.org/)
- [GulpJS](http://gulpjs.com/)


```sh
# Clone this repository
$ git clone git://github.com/willianjusten/Fast.git new_project
$ cd new_project

# install dependencies
$ npm install
```

With the commands above, you have everything to start.

### Folders and Files

```sh
new_project -
	/build -
		/css
			main.css
		/img
		/js
			main.js
		.htaccess
	/src -
		/img
		/js
		/styl
		/templates
		.editorconfig
		gulpfile.js
		package.json
	/tests -
		/unit
```

### Tasks

- `gulp`: Initialize watch for changes and a server(localhost:8080)
- `gulp --fy`: Initialize watch for changes and a server(localhost:8080) using browserify mode
- `gulp js`: execute js files
- `gulp browserify`: execute js files in browserify mode
- `gulp jade`: compile jade files
- `gulp stylus`: compile stylus files
- `gulp imagemin`:compress image files
- `gulp browser-sync`: inicialize a server
- `gulp watch`: call for watch files
- `gulp deploy`: deploy files via rsync (view configuration below)
- `gulp --p`: minify all files for production
- `gulp --fy --p`: minify all files for production (browserify mode)
- `gulp build --p`: minify files and deploy via rsync
- `gulp build --fy --p`: minify files and deploy via rsync (browserify mode)

### License

This project used a boilerplate that is free and open source software, distributed under the The MIT License. So feel free to use this to create your site without linking back to me or using a disclaimer.

If you’d like to give me credit somewhere on your blog or tweet a shout out to [@willian_justen](https://twitter.com/willian_justen), that would be pretty sweet.