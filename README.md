# Cypress Project

## Overview
This project uses Cypress for end-to-end testing. Cypress is a powerful, fast, and reliable testing framework for anything that runs in a browser.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Project Setup](#project-setup)
- [Running Tests](#running-tests)
- [Folder Structure](#folder-structure)
- [reports](#reports)


## Prerequisites
- [Node.js](https://nodejs.org/) (version 12 or higher)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

## Project Setup
1. Create a new project directory:
    
    mkdir my-cypress-project
    cd my-cypress-project


2. Initialize a new Node.js project:

    npm init -

3. Install Cypress:
   
    npm install cypress --save-dev

4. Open Cypress for the first time to generate the folder structure:
    
    npx cypress open

## Running Tests
### Open Cypress Test Runner
To open the Cypress Test Runner, run npx cypress open

## Folder Structure
e2e/ : test script files
fixtures/: Test data files.
page /: page object model implimentation .
support/: Custom commands and support files.

## reports

cypress-mochawesome-reporter(https://www.npmjs.com/package/cypress-mochawesome-reporter)
#   T a s k c y p r e s s  
 