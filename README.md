Angular Wireframing Boilderplate
---
A simple Angular 1.x boilerplate for building wireframes. Built by [Rebekah Louten](https://github.com/rbkh) and [Max Felker](https://github.com/maxatbrs) from [Big Room Studios](https://github.com/BigRoomStudios).

## Install Tools

If you have not installed the tools used by the [Yeoman Angular generator v0.16](https://github.com/yeoman/generator-angular), please run the following lines in your terminal:

```npm
$ npm install -g grunt-cli bower yo generator-karma generator-angular
$ gem install compass
```

## Setup Project

First, download the project:

```bash
$ curl -LOk https://github.com/rbkh/angular-wireframing/archive/master.zip
$ unzip master.zip
$ mv angular-wireframing-master/ my-project/
$ cd my-project/
```

Then install dependencies:

```bash
$ npm i
```

### Running the App in Development
Run the app locally at http://localhost:9000

```bash
$ gulp
```

### Build the App
This creates a production build in the `/dist` folder:

```bash
$ gulp build
```


### Run in Production Mode
To build in production mode and run locally at http://localhost:9000

```bash
$ gulp build: prod
```

## Deploy Using Now
This deploys the production build to a [now](https://zeit.co/now) container:

```bash
$ gulp build
$ now dist/ --public
```
