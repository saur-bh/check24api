
# check24 API testing using cypress -RunBook

The test was conducted on web browser ( Chrome v91  and Electron v89)

## Pre-Condition 
Install node.js and npm on the system
* Windows https://phoenixnap.com/kb/install-node-js-npm-on-windows
* Mac https://www.newline.co/@Adele/how-to-install-nodejs-and-npm-on-macos--22782681
* Linux(ubantu) https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/

## Tech Stack 
- javaScript 
- cypress
- chai 

## UseCase which are automated for Login Page 
1. Vaidate status code
2. Validate error message
3. validate content-type
4. Validate header response


## Setup

* Must have NodeJS and NPM installed (https://nodejs.org/en/)
* Install dependencies by running `npm install`

## Running Tests

* To run all  or indiviual tests via GUI, run `npm run cy:open` - headed Mode
* To run tests from command prompt , run `npm run cy:tests`  - headlessMode

## Enhancement
  * Integration with CI tool i.e. Jenkins
