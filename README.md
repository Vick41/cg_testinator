# README #

Nightwatch Test Automation Framework

### What is this repository for? ###

* Testing multiple UI Clients
* Version 1.0

### Required Installations? ###

You will need the following installed in order to use this application:
* [NodeJS](https://nodejs.org)

Everything else needed is installed through NPM (descriped later).


### How do I get started? ###

Run the following command from the console:
```
    npm install
```


Install Nightwatch.js globally:
```
    npm install -g nightwatch
```

### Test that Nightwatch is working ###
```
    nightwatch -a test
```

This will open a headless browser version of Chrome (as in, the browser is handled virtually.).  The -a option, denotes the use of a 'test' tag.

In order to see the Chrome browser open, enter the following command:
```
    nightwatch -a test -e chrome
```

The -e option allows for another environment (which is set up in the nightwatch.json file).  The 'chrome' environment has been configured to run in a browser window.  The default runs it headlessly.

When configuring environments, it is possible to set up multiple global variables such as specific urls or test information.

### Who do I talk to? ###
* Michael C. Hill
* [mhill@tondaydesigns.com](mailto:mhill@tondaydesigns.com)
