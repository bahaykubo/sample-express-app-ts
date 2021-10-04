# Sample App

This is an express app written in typescript that shows how we can add an internal npm package.

The internal npm package is called 'sample-npm-module' and the package called 'sample-npm-module-v1.0.0.tgz' is in the root directory of the project.

## Setup project
To build the project, install the npm packages:

```yarn install --frozen-lockfile```


### Installing internal packages
Note when installing updated internal packages (new tar file but with the same filename), do a ```yarn cache clean``` to not install the cached version of the package.

## Start a development server
Start a development server by running:

```yarn start-dev```

This will run [nodemon](https://nodemon.io/) and perform a ```tsc --incremental``` and start the node app ```node .```. The project will then rebuild and restart whenever you make changes to the app.

## Send http requests to app
There is a .http file on [test directory](./test) that you can use to send http requests to the app. You would need the [rest client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension in vs code to use this.
