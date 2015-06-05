<p align="center">
  <a href="http://doggerjs.com">
    <img height="250" src="http://doggerjs.com/img/doggerjs.png"/>
  </a>
</p>
# DoggerJS Frontend

[![Build Status](http://img.shields.io/travis/hashdog/doggerjs-frontend.svg?style=flat-square)](https://travis-ci.org/hashdog/doggerjs-frontend)
[![Dependency Status](http://img.shields.io/david/hashdog/doggerjs-frontend.svg?style=flat-square)](https://david-dm.org/hashdog/doggerjs-frontend)
[![devDependency Status](http://img.shields.io/david/dev/hashdog/doggerjs-frontend.svg?style=flat-square)](https://david-dm.org/hashdog/doggerjs-frontend#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/hashdog/doggerjs-frontend.svg?style=flat-square)](https://codeclimate.com/github/hashdog/doggerjs-frontend)


## Prerequisite Technologies
### Linux
* *Node.js* - <a href="http://nodejs.org/download/">Download</a> and Install Node.js, nodeschool has free <a href=" http://nodeschool.io/#workshoppers">node tutorials</a> to get you started.

If you're using Ubuntu, this is the preferred repository to use...

```bash
$ curl -sL https://deb.nodesource.com/setup | sudo bash -
$ sudo apt-get update
$ sudo apt-get install nodejs
```

* *Git* - Get git using a package manager or <a href="http://git-scm.com/downloads">download</a> it.

### Windows
* *Node.js* - <a href="http://nodejs.org/download/">Download</a> and Install Node.js, nodeschool has free <a href=" http://nodeschool.io/#workshoppers">node tutorials</a> to get you started.
* *Git* - The easiest way to install git and then run the rest of the commands through the *git bash* application (via command prompt) is by downloading and installing <a href="http://git-scm.com/download/win">Git for Windows</a>

### OSX
* *Node.js* -  <a href="http://nodejs.org/download/">Download</a> and Install Node.js or use the packages within brew or macports.
* *git* - Get git <a href="http://git-scm.com/download/mac">from here</a>.

## Prerequisite packages

* DoggerJS currently works with gulp.
```
$ npm install -g gulp
// and bower
$ npm install -g bower 
```

## Installation
You just need to clone this repo and start your development.


```bash
$ git clone https://github.com/hashdog/doggerjs-frontend.git
$ cd doggerjs-frontend && npm install
```

### Running
DoggerJS supports the gulp task runner for various services which are applied on the code.
To start compiling your application run:
```bash
$ gulp
```

This gulp task will compile your templates and sass files, optimize images, javascripts, css and create the public directory.

After that, you need to run the local server:
```bash
$ node server
```
Then, open a browser and go to:
```bash
http://localhost:8080
```
